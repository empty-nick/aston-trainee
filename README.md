## Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
Они могут содержать разные типы данных и длинна массива не фиксированна. Для расширения массива требуется создать новый
массив у которого будет столько же элементов, как и у исходного, но на один больше. Нужно передать все элементы текущего
массива в новый и последним элементом передать новый элемент массива, который надо добавить.

Массив совмещает в себе функции следующих типов данных:
1) Queue (очередь). First-In-First-Out (FIFO). Через `Array.push()` и `Array.shift()`
2) Stack (стек). Last-In-First-Out (LIFO). Через `Array.push()` и `Array.pop()`
3) List (список). Элементы по индексам.

***
## Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

```javascript
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.bind(obj)() // I output only external context: some value
logger.apply(obj) // I output only external context: some value
logger.call(obj) // I output only external context: some value
```
Смотри `/task.js`

## Бонус задание: Реализовать полифил (собственную функцию, реализующую встроенную в js) метода bind()
Смотри `/task.js`