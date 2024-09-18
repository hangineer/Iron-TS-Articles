// 函式陳述式

// 為參數加上型別註釋
function add(a: string, b: string) {
  return a + b;
}
add('1', '4')
// ❌ 錯誤示範
// add(1, '2')

// 沒有回傳值，可以使用 `void`; 若有回傳值，則在參數後定義即可
function f2(a: number, b: number): void {
  document.querySelector('body')?.append(document.createElement('div'));
}
// function f2(a: number, b: number): number { // 最右邊的 : number 代表回傳值型別
//   return a + b;
// }


// 下方會被自動推斷為 function noop(): void
function noop() {
  return;
}

// return 4 為數字，回傳值會自動被推斷為 : number
function getNum(a, b) {
  return 4;
}


// 回傳 Promise
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
async function fetchData(): Promise<object> {
  return { name: "Hannah", age: 18 };
}


// 函式表達式
let f3 = function(a: string, b: string): string {
  return a + b;
}

// 匿名函式
const names = ["Alice", "Bob", "Eve"];


names.forEach(function (s) {
  console.log(s.toUpperCase());
});


// 箭頭函式
names.forEach((s) => {
  console.log(s.toUpperCase());
});



// 第一個箭頭不是 ES6 的箭頭，是 TS 定義函式的格式得要長這樣
let f4: (a: string, b: string) => string = function(a: string, b: string): string {
  return a + b;
}
let f5: (a: string, b: string) => string = (a: string, b: string): string => {
  return a + b;
}
function sayHi(fn: (a: string) => void) {
  fn("Hello TypeScript");
}
function printToConsole(s: string) {
  console.log(s); // Hello TypeScript
}

sayHi(printToConsole);


// Interface Functions 介面函式
interface strFunc {
  (input: string): string;
}

const repeatStr: strFunc = function(input: string): string {
  return input.repeat(2);
};

console.log(repeatStr('hello')); // hellohello


// Generic Functions 泛型函式
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>('myString');  // string
let output2 = identity<number>(100);         // number
// ❌ 錯誤示範
// let output3 = identity<number>('100');


// 其餘參數 (`...`) 結合函式
function sum(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4));  // 10
console.log(sum(10, 20));      // 30