let a1 = 'May'; // : string
let b1 = 1; // : number
let c1 = null; // : null
let d1 = undefined; // : undefined
let e1 = true; // : boolean
let f1 = Symbol('test'); // : symbol
let g1 = { name: 'banana' }; // : { name: string; }
let h1 = [1, 2, 3]; // : number[]
let j1 = function test() {}; // : () => void

const a2 = 'May'; // : May
const b2 = 1; // : 1
const c2 = null; // : null
const d2 = undefined; // : undefined
const e2 = true; // : true
const f2 = Symbol('test'); // : typeof f2
const g2 = { name: 'banana'}; // : { name: string; }
const h2 = [1, 2, 3]; // : number[]
const j2 = function test() {}; // : () => void


let x: 'hello';
x = 'hello'; // ✅ Pass
// ❌ 錯誤示範
// x = 'typescript';


let flag: 'yes' | 'no';
flag = 'no'; // ✅ Pass
// ❌ 錯誤示範
// flag = 'maybe';


interface SquareConfig {
  width: number;
}
function setSquare(x: SquareConfig | 'auto') {
  console.log(x);
}
setSquare({ width: 50 });
setSquare("auto");
// ❌ 錯誤示範
// setSquare("automatic");

// String Literal Types
const str = 'May';
let str2: 'hello' = 'hello';


// Numeric Literal Types
const n1 = 10;
let n2: 100 = 100;


// Boolean Literal Types
const v1 = true;
let v2: true = true;


// Object Literal Types
let test1 = { name: 'banana'};
let test2: {name: '11'} = {name: '11'}


//Array Literal Types
let fruits: ('apple' | 'banana')[] = ['apple', 'banana'];


// Tuple Literal Types
let tuple: ['a', 'b'] = ['a','b']


// Enum Literal Types
enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT'
}

let move: Direction = Direction.Up;


// Function Literal Types
function getStatus(): 'success' | 'failure' {
  return 'success';
}


// 範例取自官方文件
declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" };

// 呼叫
// handleRequest(req.url, req.method); // ❌ req.method 會被自動推斷為 string 而不是 "GET"

// 提供兩個解法
// 1. Type Assertion
// const req = { url: "https://example.com", method: "GET" as "GET" };
// handleRequest(req.url, req.method as "GET");

// 2. as const
// const req = { url: "https://example.com", method: "GET" as const} ;