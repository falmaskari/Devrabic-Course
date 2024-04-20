function calculate(a, b, callback) {
  const res = a + b;
  callback(res);
}

calculate(1, 2, function (res) {
  console.log(`Result is ${res}`);
});

setTimeout(() => {
  console.log("Hi");
}, 2000);

const promise = new Promise((resolve, reject) => {
  const numb = -1;
  if (numb > 0) {
    resolve();
  } else {
    reject();
  }
});

promise.then(() => console.log("Success")).catch(() => console.log("Failed"));

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));

async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
getData();
