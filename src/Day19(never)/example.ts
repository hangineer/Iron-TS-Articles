// never 使用時機
// 1. 拋出錯誤、異常的函式
function error(message: string): never {
  throw new Error(message);
}

// 2. 無窮迴圈
let a = function infiniteLoop() {
  while (true) {}  // 無窮迴圈，永遠不會有回傳值
}

// 3. 聯合型別中「不可達」的情況
function fn(x: string | number) {
  if (typeof x === "string") {
    // ... 略 ...
  } else if (typeof x === "number") {
    // ... 略 ...
  } else {
    return x; // ✅ x 推斷為 never
  }
}

function fn2(x: string | number) {
  if (typeof x === "string") {
    // ... 略 ...
  } else {
    return x; // ✅ x 推斷為 number
  }
}


// never 結合 Union Types 會發生什麼事？
type AnotherType = never | string | number; // never 不見了！！！！



// 解釋 never 可指派性的範例
// never 可以被指派(賦值)給任何型別（如 any、unknown、object、void、undefined、null）
function throwError(errMsg: string): never {
  throw new Error(errMsg);
}
let exampleString: string = throwError("Error 1");  // ✅ Pass
let exampleNumber: number = throwError("Error 2");  // ✅ Pass
let exampleBoolean: boolean = throwError("Error 3");  // ✅ Pass


// 沒有任何型別可以指派(賦值)給 never，包括它自己
let strVal = 'hello'; // : string
let neverVal = function infiniteLoop() {
  while (true) {}
};
let result: never;
// ❌ 錯誤示範
// result = strVal;
// result = neverVal;



//  範例參考這篇文章： https://ithelp.ithome.com.tw/articles/10215342
// let probablyThrowsError = function(num: number): number | never {
//   if (num <= 0) {
//     throw new Error('Not a positive number, go to hell!');
//   }
//   return num;
// };