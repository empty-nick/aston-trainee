import {CounterType, IPerson} from './models.ts';

// Задание 1 – Создать объект counter всеми возможными способами
class Person implements IPerson<string, number> {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greetUser() {
    return `Hi, ${this.name}`
  }
}
function Staff<N, A>(this: IPerson<N, A>, name: N, age: A) {
  this.name = name;
  this.age = age;
}

const counter1: Object = {}
const counter2: Object = Object.create(Object.prototype)
const counter3: Object = Object.fromEntries([])
const counter4: Object = new Object(null) // and other created by 'new' (Map, Set, Date etc.)
const counter5: Object = JSON.parse('{}')
const counter6: IPerson<string, number> = new Person('Maksim', 44)
const counter7: IPerson<string, number> = new (Staff as any)('Name', 88)
const counter8: Object = Object.assign({})
const counter9: Object = {...[1, 2, 4]} // or another Object

// Задание 2 – Скопировать объект counter всеми возможными способами;
function objectCopy<T>(object: T): T {
  if (typeof object !== 'object')
    return object;

  const copiedObject = {} as T;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      copiedObject[key] = objectCopy(object[key]);
    }
  }
  return copiedObject;
}

const counter: CounterType = { count: 12 }

const copyCounter1: CounterType = Object.assign({}, counter)
const copyCounter2: CounterType = JSON.parse(JSON.stringify(counter))
const copyCounter3: CounterType = counter
const copyCounter4: CounterType = objectCopy<CounterType>(counter)
const copyCounter5: CounterType  = { ...counter }
const copyCounter6 = {} as CounterType
for (const counterKey in counter) {
  copyCounter6[counterKey] = counter[counterKey];
}

// Задание 3 – Создать функцию makeCounter всеми описанными и возможными способами;
function makeCounter1(){} // function declaration
const makeCounter2 = function(){} // function expression
const makeCounter3 = () => {} // arrow function
// makeCounter4
(function(){})() // IIFE (Immediately Invoked Function Expression)
function MakeCounter5(this: any, count: number){
  this.number = count
} // Function constructor
class Counter6{
  private count: number;
  constructor(count: number) {
    this.count = count
  }
  makeCounter6(){
    return this.count++
  } // Function as class method
}
const makeCounter7 = function counter(){
  let count: number = 0
  return count
} // Named function expression
function count(makeCounter8: () => {}){
  return makeCounter8()
} // Callback function
function* makeCounter9(){
  let count: number = 0
  yield count++;
  yield count++;
  yield count++;
} // Generator function
const makeCounter10 = function*(){
  let count: number = 0
  yield count++;
  yield count++;
  yield count++;
} // Generator function expression
async function makeCounter11(){} // Async function declaration
const makeCounter12 = async () => {} // Async arrow function
const makeCounter13 = async function (){} // Async function expression
const makeCounter14 = async function*(){} // Async generator function expression
async function* makeCounter15() {} // Async generator declaration expression
const arrowGenerator = () => {
  return function* (){}
}
const makeCounter16 = arrowGenerator() // Arrow function generator
const asyncArrowGenerator = () => {
  return async function* (){}
}
const makeCounter17 = asyncArrowGenerator() // Async arrow function generator
function makeCounter18(a: (b: number, c: number) => number) {
  return function (b: number){
    return function (c: number){
      return a(b, c)
    }
  }
} // Currying function
function makeCounter19(count: (number: number) => number, number: number){
  number += 10
  return count(number)
} // Higher-order functions