// 1 string
const str1 = 'str1'
const str2 = String('str2')
const str3 = {} + '' // any type + string = string
const str4 = JSON.stringify({prop: 'string'})
const str5 = `dynamic ${str4}`
const str6 = 155..toString()
// 2 number
const num1 = 1
const num2 = Number('268')
const num3 = +'1597'
const num4 = '1589.55' - '591' // -*/
const num5 = parseFloat('1159.848')
const num6 = parseInt('1159.848')
const num7 = ('str' | 2)
const num8 = ('str' & 2)
// 3 boolean
const bool1 = true
const bool2 = Boolean(0)
const bool3 = 6 < 3
const bool4 = !!6
// 4 null
const nul1 = null
// 5 undefined
const undef1 = undefined
let undef2
const undef3 = function (){} // if function doesn't return = undefined
// 6 symbol
const symbol1 = Symbol('gvf')
// 7 bigint
const bigInt1 = BigInt(156)
const bigInt2 = 161565n

const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN

const res2 = (true && 3) + "d";
console.log(res2); // 3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); //trued