import {DeepEqual2, DeepEqualType, IObjects} from "./models.ts";

// Написать функцию глубокого сравнения двух объектов:
const obj1: IObjects = {
  here: {
    is: "on",
    other: "3"
  },
  object: "Y"
};
const obj2: IObjects = {
  here: {
    is: "on",
    other: "2"
  },
  object: "Y"
};

const deepEqual: DeepEqualType = (obj1, obj2) => {
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object')
    return false
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0)
    return true

  const keys: string[] = Object.keys(obj1)
  if (Object.keys(obj2).length !== keys.length)
    return false

  for (const objKey in obj1) {
    if (!obj2.hasOwnProperty(objKey))
      return false
    if (typeof obj1[objKey as keyof object] === 'object' && typeof obj2[objKey as keyof object] === 'object')
      return deepEqual(obj1[objKey as keyof object], obj2[objKey as keyof object])
    if (obj1[objKey as keyof object] !== obj2[objKey as keyof object])
      return false
  }
  return true
}
console.log(deepEqual<IObjects, IObjects>(obj1, obj2))

const deepEqualV2: DeepEqual2 = (...objectToEqual) => { // Просто было интересно проверить себя
  if (objectToEqual.length <= 1)
    return true
  const [firstObject, ...other] = objectToEqual
  return other.every( object => {
    for (const objectKey in firstObject) {
      if (!object.hasOwnProperty(objectKey))
        return false
      if (Object.keys(object).length !== Object.keys(firstObject).length)
        return false

      if (typeof object[objectKey as keyof object] === 'object' && typeof firstObject[objectKey as keyof object] === 'object')
        return deepEqualV2(firstObject[objectKey as keyof object], object[objectKey as keyof object])
      if (object[objectKey as keyof object] !== firstObject[objectKey as keyof object])
        return false
    }
    return true
  })
}

console.log(deepEqualV2(obj1, obj2, {})) // false

// Развернуть строку в обратном направлении при помощи методов массивов:
function reverseStr(str: string): string {
  return str.split('').reverse().join('')
}

console.log(reverseStr('Name')) // emaN