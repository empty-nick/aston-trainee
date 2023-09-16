## Задание 1 – Создать объект counter всеми возможными способами;
1) Literal
2) Object.create()
3) Object.fromEntries([ ])
4) new Object()
5) JSON.parse('{}')
6) Class constructor
7) Function constructor
8) Object.assign({})
9) Spread operator

См `/homework.ts`

## Задание 2 – Скопировать объект counter всеми возможными способами;
1) Object.assign({}, counter)
2) JSON.parse(JSON.stringify(counter))
3) Просто присвоить ссылку
4) Create a function to copy object
5) Spread
6) for (elem in object)

См `/homework.ts`

## Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
1) Function Declaration
2) Function Expression
3) Arrow Function
4) IIFE (Immediately Invoked Function Expression)
5) Function constructor
6) Function as class method
7) Named function expression
8) Callback function
9) Generator function
10) Generator function expression
11) Async function declaration
12) Async arrow function
13) Async function expression
14) Async generator function expression
15) Async generator function declaration
16) Arrow function generator
17) Async arrow function generator
18) Currying function
19) Higher-order functions

См `/homework.ts`

***
## Задание 1 (Бонус) – Написать функцию глубокого сравнения двух объектов:
``` JS
const obj1 = { here: { is:
"on", other: "3" }, object: "Y" };

const obj2 = { here: { is:
"on", other: "2" }, object: "Y" };

const deepEqual =
(obj1, obj2) => {};
```
См `/bonus.ts`

## Задание 2 (Бонус) – Развернуть строку в обратном направлении при помощи методов массивов:
```JS
function reverseStr(str: string): string {
  return str.split('').reverse().join('')
}
```
См `/bonus.ts`