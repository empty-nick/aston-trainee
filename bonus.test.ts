import { assertEquals } from "https://deno.land/std@0.202.0/assert/mod.ts";
import {firstSum} from "./bonus.ts";

const arr1: number[] =  [5, 8, 9, 7, 9, 3, 2]
const arr2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const arr3: number[] = [5, 32, 2, 3, 7, 9, 1, 6]

// Интересно было попробовать тесты
Deno.test('Sum function 1', () => assertEquals(firstSum(arr1, 10), [8, 2]))
Deno.test('Sum function 2', () => assertEquals(firstSum(arr2, 11), [2, 9]))
Deno.test('Sum function 3', () => assertEquals(firstSum(arr3, 8), [5, 3]))