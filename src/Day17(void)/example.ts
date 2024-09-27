// 1.
function sayHi() {
  console.log('Hi!')
}

function noop() {
return;
}


// 2.
type voidFunc = () => void;

const f1: voidFunc = () => {
  return 'hello'; // ✅ Pass，但回傳值會被忽略
};

const f2: voidFunc = () => true;  // ✅ Pass，但回傳值會被忽略

console.log(f1()); // hello


// 3.
const test = f2();
// ❌ 錯誤示範
// if (test) {
//   console.log('1')
// }



// 4.
const src = [1, 2, 3]; // : number[]
const dst = [0];       // : number[]
src.forEach((el) => dst.push(el));




// 5.
function test1(): void {
  // return true;  // ❌ TypeScript 會報錯
}

const test2 = function (): void {
  // return true;  // ❌ TypeScript 會報錯
};



// 6.
let undefinedVal: undefined;
let anyVal: any;
let nullVal: null;
let voidVal: void;
let neverVal: never = (() => { throw new Error('error') })()
let objectVal: object = { x: 'a'};
let unknownVal: unknown

let res1: void = undefinedVal;  // ✅ Pass
let res2: void = anyVal;        // ✅ Pass
// let res3: void = nullVal;    // 在 strictNullChecks 關閉(false)的狀態下才不會報錯
let res4: void = voidVal;       // ✅ Pass
let res5: void = neverVal;      // ✅ Pass
// let res6: void = objectVal;  // ❌ Type 'object' is not assignable to type 'void'.
// let res7: void = unknownVal; // ❌ Type 'unknown' is not assignable to type 'void'.