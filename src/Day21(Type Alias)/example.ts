// 物件型別別名
type Point = {
  x: number;
  y: number;
};
const center: Point = { x: 0, y: 0 }; // ✅ Pass


// 基本型別別名
type ID = number | string;



// Type Alias 並不是在創建「新」的型別
declare function getInput(): string;
declare function sanitize(str: string): string;

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";


// 常用情境一：經常重複使用的型別
type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
};

// 把型別別名 Product 套用在變數上
let products: Product[] = [];

// 定義一個函式來新增產品到陣列中，傳入的產品參數要符合 Product type 的結構
function addProduct(product: Product) {
  products.push(product);
}

// ❌ 錯誤示範
// addProduct({ id: 1, name: '北拋拋幼咪咪面膜', price: 499 });


// ✅ Pass
addProduct({ id: 2, name: '保濕精華乳', price: 999, stock: 100 });


// 常用情境二：提高程式碼可讀性
type ButtonState = 'successful' | 'fail' | 'loading';

function renderButton(state: ButtonState) {     // ButtonState 型別別名
  switch (state) {
      case 'successful':
          console.log('成功狀態的按鈕');
          break;
      case 'fail':
          console.log('失敗狀態的按鈕');
          break;
      case 'loading':
          console.log('載入狀態的按鈕');
  }
}

renderButton('successful'); // ✅ 成功狀態的按鈕
renderButton('fail');       // ✅ 失敗狀態的按鈕
renderButton('loading');    // ✅ 載入狀態的按鈕
// renderButton('test');       // ❌ 錯誤示範