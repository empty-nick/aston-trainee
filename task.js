// Привязать контекст объекта к функции logger,
// чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.bind(obj)() // I output only external context: some value
logger.apply(obj) // I output only external context: some value
logger.call(obj) // I output only external context: some value

// Бонус задание: Реализовать полифил (собственную функцию, реализующую встроенную в js) метода bind()
function customBind(func, ...argumentsToBind){
  return function (...args){
    return func.call(this, ...argumentsToBind, ...args)
  }
}

const toLogged = function () {
  console.log(`This is ${this.item}...`)
}

obj.sayHi = customBind(toLogged)
obj.sayHi() // This is some value...