// as 語法
function printId(id: number | string) {
  console.log((id as string).toUpperCase());
};


// <> 角括號語法
// function printId(id: number | string) {
//   console.log((<string>id).toUpperCase());
// };


// 下面這段編譯成 JavaScript 後，型別斷言都消失了！因為數字無法調用 toUpperCase() 方法 ，所以在運行(runtime) 時就會報錯
let someValue: any = 123;
let upperCaseValue: string = (someValue as string).toUpperCase();


// ❌ 錯誤示範
// const x = "hello" as number;


// DOM 取得
// const inputEl = document.querySelector(".test") as HTMLInputElement;
// const inputEl2: HTMLInputElement = document.querySelector(".test");

// Const Assertion
const directions = ['up', 'down', 'left', 'right']
const directions2 = ['up', 'down', 'left', 'right'] as const; // 常數斷言
// ❌ 錯誤示範
// directions2.push('NONE');


// 雙重斷言
// 語法：const a = expr.(表達式) as any as T(特定型別);

// 1.
interface User {
  id: number;
  name: string;
  email: string;
}

function fetchData(): any {
  return {
      id: 1,
      name: "Hannah",
      email: "hanforwork@example.com"
  };
}
const expr = fetchData();
const user = expr as any as User; // 雙重斷言， ✅ Pass

// 2.
function handler(e: Event) {
  const element = (e as any) as HTMLElement; // ✅ Pass
}