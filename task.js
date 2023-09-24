// Task 1
let promiseTwo = new Promise((resolve, reject) => {
  resolve("a");
});

promiseTwo
  .then((res) => {
    return res + "b";
  })
  .then((res) => {
    return res + "с";
  })
  .finally((res) => {
    return res + "!!!!!!!"; // (undefined) => undefined + '!!!!!!'
  })
  .catch((res) => {
    return res + "d"; // no error
  })
  .then((res) => {
    console.log(res); // abc
  });

// Task 2
function doSmth() {
  return Promise.resolve("123");
}

doSmth()
  .then(function (a) {
    console.log("1", a); // 1, 123
    return a;
  })
  .then(function (b) {
    console.log("2", b); // 2, 123
    return Promise.reject("321");
  })
  .catch(function (err) {
    console.log("3", err); // 3, 321
  })
  .then(function (c) {
    console.log("4", c); // 4, undefined
    return c;
  });