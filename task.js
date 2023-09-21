// Создать объект Person несколькими способами, после создать объект Person2, чтобы в нём были доступны
// методы объекта Person. Добавить метод logInfo чтоб он был доступен всем объектам.

// Class constructor
class PersonClass{
  constructor(name, age) {
    this.name = name ?? 'Default name';
    this.age = age ?? NaN;
  }
  introduce() {
    return `I am ${this.name}, and I am ${this.age} y.o. INTRODUCER`
  }
}
class Person2Class extends PersonClass {
  constructor(name, age) {
    super(name, age);
  }
}

// Function constructor
function PersonFunc(name, age){
  this.name = name;
  this.age = age;
  this.introduce = function () { return `I am ${this.name}, and I am ${this.age} y.o. INTRODUCER` }
}
function Person2Func(name, age) {
  this.name = name;
  this.age = age;
  PersonFunc.call(this, this.name, this.age)
}
Person2Func.prototype = Object.create(PersonFunc.prototype)

// Literal object with create or setPrototypeOf
const PersonObject = {
  name: 'Kwa',
  age: 2232,
  introduce: function () { return `I am ${this.name}, and I am ${this.age} y.o. INTRODUCER` }
}


const person2Class = new Person2Class('Maksim', 565)
const person2Func = new Person2Func('Alisa', 2111)
const person2ObjectProto = Object.setPrototypeOf({name: 'Kwa', age: 53}, PersonObject)
const person2Object = Object.create(PersonObject)
person2Object.name = 'Pikachu';
person2Object.age = 2555;

PersonClass.prototype.logInfo = function () { return `This is ${this?.name}, he/she is ${this?.age}.` };
PersonFunc.prototype.logInfo = function () { return `This is ${this?.name}, he/she is ${this?.age}.` }
PersonObject.logInfo = function () { return `This is ${this?.name}, he/she is ${this?.age}.` }

console.log(person2Class.logInfo()) // This is Maksim, he/she is 565.
console.log(person2Func.logInfo()) // This is Alisa, he/she is 2111.
console.log(person2ObjectProto.logInfo()) // This is Kwa, he/she is 53.
console.log(person2Object.logInfo()) // This is Pikachu, he/she is 2555.


// Создать класс PersonThree c get и set для поля name и конструктором, сделать класс наследник от класса Person.
class PersonThree extends PersonClass{
  constructor(name) {
    super()
    this._name = name ?? 'Default name';
  }
  set name(newName){
    if (typeof newName !== 'string')
      throw TypeError(`name must be a string value: ${newName}`)
    if (newName.length <= 2)
      throw RangeError(`name must be longer then 2`)
    else
      this._name = newName
  }
  get name(){ return `${this._name} is Getter` }
}

const aa = new PersonThree('Maksim')
// aa.name = 'A' // RangeError: name must be longer then 2
aa.name = 'Mals'
console.log(aa.name) // Mals is Getter