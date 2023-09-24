# Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):


1) Задание

```javascript
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
```
Смотри `./task.js`

2) Задание
```javascript
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
```
Смотри `./task.js`

3) Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
   Входные данные: `[10, 12, 15, 21]`

Смотри `./logIndex.js`

4) Прочитать про Top Level Await (можно ли использовать await вне функции async)

Top Level Await был добавлен в ES12 (ECMAScript 2022). Его можно использовать вне async функции, 
на верхнем уровне модуля (Node.js). В `package.json` нужно добавить `"type": "module"`.
```javascript
const response = await fetch('http://some-url.com')
const result = await response.json()
```
Также, Top Level Await можно использовать в других средах. Например, Deno, который позволяет
делать асинхронные верхне уровневые циклы.
```javascript
for await (number of ArrayOfNumbers){
  // async
}
```

## БОНУС ЗАДАНИЕ
1) Необходимо реализовать функцию `fetchUrl`, которая будет использоваться следующим образом.
Внутри `fetchUrl` можно использовать условный метод `fetch`, который просто возвращает
`Promise` с содержимым страницы или вызывает `reject`
```javascript
fetchUrl('https://google/com&#39')
    .then(...)
    .catch(...) 
// сatch должен сработать только после 5 неудачных попыток 
// получить содержимое страницы внутри fetchUrl
```

Смотри `./bonus.js`