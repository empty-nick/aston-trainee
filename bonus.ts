// Написать функцию, которая вернет массив с первой парой чисел, сумма которых равна total:
type TypeFirstSum = (array: Array<number>, total: number) => [number, number] | null

const arr: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr2: Array<number> = [5, 8, 9, 7, 9, 3, 2];
const arr3 = [5, 5, 32, 2, 3, 7, 9, 1, 6];


const total = 13;
export const firstSum: TypeFirstSum = (arr, total) => {
  const hash: Map<number | undefined, number> = new Map()
  for (let i = 0; i < arr.length; i++) {
    hash.set(arr.at(i), i)
  }
  for (const [hashKey, hashValue] of hash) {
    if (hash.has(total - Number(hashKey)) && hash.get(total - Number(hashKey)) !== hashValue && hashKey !== undefined) {
      return [Number(hashKey), total - Number(hashKey)]
    }
  }
  return null // если нет совпадений
}

console.log(firstSum(arr, total), [4, 9]) // [4, 9]
console.log(firstSum(arr2, 10), [8, 2]) // [8, 2]