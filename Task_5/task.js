//1

function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
delay(1000).then(() => console.log('Прошла 1 секунда'));

//2

function loadUserPromise(id) {
    return new Promise((resolve, reject) => {
      loadUser(id, (err, user) => {
        if (err) reject(err);
        else resolve(user);
      });
    });
  }
  
loadUserPromise(1).then(user => console.log(user));

//3

const ids = [1, 2, 3, 4, 5];

async function loadAllSequential(ids) {
  const results = [];
  
  for (const id of ids) {
    const user = await fetchUser(id);
    results.push(user);
  }
  
  return results;
}
//4
async function loadAllParallel(ids) {
  return Promise.all(ids.map(id => fetchUser(id)));
}

//5
const ids2 = [1, -1, 3, -2, 5];

async function loadUsersSettled(ids2) {
  const results = await Promise.allSettled(ids2.map(id => fetchUser(id)));

  const success = [];
  const failed = [];

  results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
      success.push(result.value);
    } else {
      failed.push({ id: ids2[index], reason: result.reason });
    }
  });

  return { success, failed };
}
//6
function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const timerId = setTimeout(
      () => reject(new Error(`Timeout after ${ms}ms`)),
      ms
    );

    promise
      .then(resolve, reject)
      .finally(() => clearTimeout(timerId));
  });
}
//9

console.log('1', '4', '6', '3', '5', '2')

//10

async function main() {
  try {
    const user = await fetchUser();
    const orders = await fetchOrders(user.id);
    const paid = orders.filter(o => o.paid);
    console.log(paid);
  } catch (err) {
    console.error(err);
  } finally {
    console.log('Done');
  }
}

main();

//13
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let remaining = promises.length;

    if (remaining === 0) return resolve(results);

    promises.forEach((p, i) => {
      Promise.resolve(p).then(
        value => {
          results[i] = value;
          if (--remaining === 0) resolve(results);
        },
        reject
      );
    });
  });
}