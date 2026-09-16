Задача 1: Базовая задержка (Promise)

Создайте функцию delay(ms), которая возвращает Promise, резолвящийся через ms миллисекунд.

```JavaScript
function delay(ms) {
  // ваш код
}

delay(1000).then(() => console.log('Прошла 1 секунда'));
```

---

Задача 2: Промисификация callback-функции

Дана функция с callback. Превратите её в Promise-версию.

```JavaScript
function loadUser(id, callback) {
  setTimeout(() => {
    if (id <= 0) return callback(new Error('Invalid id'));
    callback(null, { id, name: `User${id}` });
  }, 500);
}
```

Сделайте loadUserPromise(id).

---

Задача 3: Последовательное выполнение

Есть массив ID. Загрузите пользователей последовательно (один за другим) и верните массив результатов.

```
const ids = [1, 2, 3, 4, 5];

async function loadAllSequential(ids) {
  // ваш код
}
```

---

Задача 4: Параллельное выполнение

Загрузите всех пользователей параллельно и верните массив результатов.

```
async function loadAllParallel(ids) {
  // ваш код
}
```

---

Задача 5: Promise.allSettled

Загрузите всех пользователей параллельно. Даже если часть запросов упадёт, верните объект с успешными и неуспешными результатами.

```
const ids = [1, -1, 3, -2, 5];
// ожидаем: { success: [...], failed: [...] }
```

---

Задача 6: Таймаут для Promise

Напишите функцию withTimeout(promise, ms), которая реджектит, если Promise не резолвится за ms миллисекунд.

```
async function withTimeout(promise, ms) {
  // ваш код
}
```

Задача 9: Порядок вывода (теория)

Что выведется в консоль и почему?

```
console.log('1');

setTimeout(() => console.log('2'), 0);

Promise.resolve().then(() => console.log('3'));

(async () => {
  console.log('4');
  await null;
  console.log('5');
})();

console.log('6');
```

---

Задача 10: Цепочка с обработкой ошибок

Перепишите Promise-цепочку в async/await:

```
fetchUser()
  .then(user => fetchOrders(user.id))
  .then(orders => orders.filter(o => o.paid))
  .then(paid => console.log(paid))
  .catch(err => console.error(err))
  .finally(() => console.log('Done'));
```

---

Задача 13: Свой Promise.all

Реализуйте Promise.all вручную без использования встроенного метода.

```
function myPromiseAll(promises) {
  // ваш код
}
```

---
