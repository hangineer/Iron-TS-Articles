let id: string | number; // 聯合型別
id = "12345";
id = 333;
// ❌ 錯誤示範
// id = true;

function displayPrice(price: number | [number, number]) {  // 聯合型別
    if (typeof price === "number") {
        console.log(`價格:${price}`);
    } else {
        console.log(`價格範圍:${price[0]}~${price[1]}`);
    }
};

displayPrice(50);
displayPrice([33, 55]);



// ❌ 錯誤示範
// function printId(id: number | string) {
//   console.log(id.toUpperCase());
// };

// ✅ 正確示範
function printId(id: number | string) {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
};

// keyof typeof 關鍵字 組合出 string Union Type (字串聯合型別)
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type levelKey = keyof typeof LogLevel; // type levelKey = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';