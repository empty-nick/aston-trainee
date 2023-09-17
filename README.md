## Написать ответ - почему массивы в JS являются "неправильными" и совмещают в себе несколько структур данных? Какие ?
Они могут содержать разные типы данных и длинна массива не фиксированна?...
***
## Привязать контекст объекта к функции logger, чтобы при вызове this.item выводило - some value (Привязать через bind, call, apply)

```javascript
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
logger.call(obj) // I output only external context: some value
```
Смотри `/task.js`

## Бонус задание: Реализовать полифил (собственную функцию, реализующую встроенную в js) метода bind()
Смотри `/task.js`