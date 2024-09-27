// 型別推論
let a = undefined;
let b = null;



// strictNullChecks off 時
// let str: string = null; // ✅ Pass
// let num: number = undefined; // ✅ Pass



// strictNullChecks on 時
// let str: string = null; // ❌ Type 'null' is not assignable to type 'string'.
// let num: number = undefined; // ❌ Type 'undefined' is not assignable to type 'number'.



// strictNullChecks on，想定義變數為 null 或 undefined 時，怎麼做才不會報錯？
function doSomething(x: string | null) {
  if (x === null) {
    // ... 略 ...
  } else {
    console.log(x.toUpperCase()); // ✅ Pass
  }
}



// Non-null Assertion Operator 非空斷言操作符
function test(a: string | null = 'apple') {
  // console.log(a.toUpperCase()); // ❌ 'a' is possibly 'null'.
}
// 改成下面就不會報錯
// function test(a: string | null = 'apple') {
//   console.log(a!.toUpperCase());   // ✅ Pass
// }



function liveDangerously(x?: number | null) {
  console.log(x!.toFixed()); // ✅ Pass
}
// 傳入 null 或 undefined，會在運行時報錯 ❌ TypeError: Cannot read properties of null (reading 'toFixed')
liveDangerously(null);
liveDangerously(undefined);



// undefined 和 null 的可指派性(assignability)
let strVal = 'hi';
let nullVal = null;
let undefinedVal = undefined;
// strVal = nullVal;       // ❌ Type 'null' is not assignable to type 'string'.
// nullVal = strVal;       // ❌ Type 'string' is not assignable to type 'null'.
// undefinedVal = strVal;  // ❌ Type 'string' is not assignable to type 'undefined'.
// undefinedVal = nullVal; // ❌ Type 'null' is not assignable to type 'undefined'.