import api from "./api.js";

const $section = document.querySelector("[data-field]");
const $modalAdd = document.querySelector("#modalAdd");
const $modalEdit = document.querySelector("#modalEdit");
const $modalView = document.querySelector("#modalView");
const $userDetails = document.querySelector("#userDetails");
const $btnAddUser = document.querySelector('[data-action="add"]');
const $btnCloseAdd = $modalAdd.querySelector(".btn-close");
const $btnCloseEdit = $modalEdit.querySelector(".btn-close");
const $btnCloseView = $modalView.querySelector(".btn-close");
const $formAdd = document.querySelector("#addUser");
const $formEdit = document.querySelector("#editUserForm");

let editingUser = null;

function generateHtmlUser(user) {
  return `<div data-card_id="${user.id}" class="card" style="width: 18rem;">
<img src="${user.image_link || ""}" class="card-img-top" alt="${user.name}">
<div class="card-body">
  <h5 class="card-title">${user.name} ${user.lastname ?? ""} (age: ${user.age})</h5>
  <p class="card-text">${user.description || ""}</p>
  <div class="d-flex flex-wrap gap-2">
    <button data-action="open" class="btn btn-primary btn-sm">Open card</button>
    <button data-action="update" class="btn btn-warning btn-sm">Update</button>
    <button data-action="delete" class="btn btn-danger btn-sm">Delete</button>
  </div>
</div>
</div>`;
}

function generateUserDetails(user) {
  return `
    <img src="${user.image_link || ""}" alt="${user.name}" class="user-details__photo">
    <h4 class="mb-3 fw-semibold">${user.name} ${user.lastname ?? ""}</h4>
    <ul class="user-details__list">
      <li><strong>ID:</strong> ${user.id}</li>
      <li><strong>Email:</strong> ${user.email || "—"}</li>
      <li><strong>Age:</strong> ${user.age ?? "—"}</li>
      <li><strong>Phone:</strong> ${user.phone || "—"}</li>
      <li><strong>Nickname:</strong> ${user.nickname || "—"}</li>
      <li><strong>Favorite:</strong> ${user.favorite ? "Yes" : "No"}</li>
      <li><strong>Description:</strong> ${user.description || "—"}</li>
    </ul>
  `;
}

function openModal($modal) {
  $modal.classList.remove("hidden");
}

function closeModal($modal) {
  $modal.classList.add("hidden");
}

function renderUsers(users) {
  $section.innerHTML = "";
  users.data?.forEach((user) =>
    $section.insertAdjacentHTML("beforeend", generateHtmlUser(user)),
  );
}


function getCard(target) {
  return target.closest("[data-card_id]")
}

function fillEditForm(user) {
  $formEdit.name.value = user.name || "";
  $formEdit.lastname.value = user.lastname || "";
  $formEdit.email.value = user.email || "";
  $formEdit.age.value = user.age ?? "";
  $formEdit.phone.value = user.phone || "";
  $formEdit.nickname.value = user.nickname || "";
  $formEdit.description.value = user.description || "";
  $formEdit.favorite.checked = Boolean(user.favorite);
  $formEdit.image_link.value = user.image_link || "";
}

function fillOpenForm(user) {
  $formAdd.name.value = user.name || "";
  $formAdd.lastname.value = user.lastname || "";
  $formAdd.email.value = user.email || "";
  $formAdd.age.value = user.age ?? "";
  $formAdd.phone.value = user.phone || "";
  // $formAdd.nickname.value = user.nickname || "";
  $formAdd.description.value = user.description || "";
  $formAdd.favorite.checked = Boolean(user.favorite);
  $formAdd.image_link.value = user.image_link || "";
}

async function handleOpenCard(id) {
  const user = await api.getUserById(id);
  $userDetails.innerHTML = generateUserDetails(user);
  openModal($modalView);
}

async function handleDeleteUser(card) {
  await api.deleteUser(card.dataset.card_id);
  await card.remove()
}

async function handleOpenUpdate(id) {
  const user = await api.getUserById(id);
  if (!user || user.error) return;
  editingUser = user;
  fillEditForm(user);
  openModal($modalEdit);
}

$btnAddUser.addEventListener("click", () => {
  openModal($modalAdd)
  const localdata = JSON.parse(localStorage.getItem('formdata'))
  console.log(localdata)
  if (localdata)
    fillOpenForm(localdata)
});
$btnCloseAdd.addEventListener("click", () => closeModal($modalAdd));
$btnCloseEdit.addEventListener("click", () => {
  editingUser = null;
  closeModal($modalEdit);
});
$btnCloseView.addEventListener("click", () => closeModal($modalView));

$modalAdd.addEventListener("click", (event) => {
  if (event.target === $modalAdd) closeModal($modalAdd);
});
$modalEdit.addEventListener("click", (event) => {
  if (event.target === $modalEdit) {
    editingUser = null;
    closeModal($modalEdit);
  }
});
$modalView.addEventListener("click", (event) => {
  if (event.target === $modalView) closeModal($modalView);
});

function getFormPayload(form) {
  const formData = new FormData(form);
  const formObject = Object.fromEntries(formData);
  const data = {
    ...formObject,
    phone: String(formData.get("phone") ).replace(/\s+/g, ""),
    image_link: String(formData.get("image_link") ).trim(),
    age: Number(formData.get('age') )
  };
  return data;
}

$section.addEventListener("click", (event) => {
  const action = event.target.closest("[data-action]")?.dataset.action;
  if (!action) return;

  const card = getCard(event.target);

  switch (action) {
    case 'open':
      handleOpenCard(card.dataset.card_id).catch((error)=>{
        console.log(`Ошибка открытия: {error}`)
      })
      break;
    case 'delete':
      handleDeleteUser(card).catch((error)=>{
        console.log(`Ошибка открытия: {error}`)
      })
      break
    case 'update':
      handleOpenUpdate(card.dataset.card_id).catch((error)=>{
        console.log(`Ошибка открытия: {error}`)
      })
    default:
      break;
  }
});

//

const normalize = (key, v) => {
  if (key === "favorite") return Boolean(v);
  if (v === null || v === undefined) return "";
  return String(v);
};

const getChangedFields = (original, updated) =>
  Object.fromEntries(
    Object.entries(updated).filter(
      ([key, newValue]) => normalize(key, original?.[key]) !== normalize(key, newValue),
    ),
  );

document.addEventListener("submit", async (event) => {
  const form = event.target;
  if (form !== $formAdd && form !== $formEdit) return;

  event.preventDefault();

  try {
    const data = getFormPayload(form)
    if (form === $formAdd) {
      await localStorage.setItem('formdata', JSON.stringify(data))
      await api.createUser(data);
      await form.reset();
      closeModal($modalAdd);
    } else {
      if (!editingUser) return;

      const payload = data
      const changedFields = getChangedFields(editingUser, payload);

      if (Object.keys(changedFields).length > 0) {
        await api.updateUser(editingUser.id, changedFields);
      }

      editingUser = null;
      form.reset();
      closeModal($modalEdit);
    }
    await loadUsers();
  } catch (error) {
    console.error("Failed to submit form:", error.message);
  }
})

async function loadUsers() {
  const users = await api.getAllUsers();
  renderUsers(users);
}

loadUsers().catch((error) => {
  console.error("Не удалось загрузить пользователей:", error);
});
