// 情境一：單純賦值
let person: [string, string, number];
person = ['Hannah', 'beautiful', 18]; // ✅ pass
// ❌ 錯誤示範
// person = ['Hannah', '18', 'beautiful'];
// person = ['Hannah', 18, 'beautiful', '123'];


// 情境二：越界的元素
// person.push('super beautiful');  // ✅ Pass
// person.push(true); // 可以取消註解看看


// 可選屬性
let tuple: [string, number, boolean?];
tuple = ["hello", 42];  // ✅ Pass(省略第三個元素)
tuple = ["hello", 42, true];  // ✅ Pass(包括所有元素)
// ❌ 錯誤示範
// tuple = ["hello"];  // 第二個元素（number）是必須的
// tuple = ["hello", true];  // 第二個元素的型別不匹配




// Readonly tuple
const readonlyTuple: readonly [number, boolean, string] = [5, true, 'test'];
// ❌ 錯誤示範
// readonlyTuple.push('hello');
// readonlyTuple[0] *= 5;



// 元組可以使用剩餘運算符和解構
let tuple2: [number, string, boolean] = [1, "hello", true];
let [a, b, c] = tuple2
console.log(a); // 1
console.log(b); // "hello"
console.log(c); // true


let tuple3: [number, string, boolean, number] = [1, "hello", true, 2024];
let [first, second, ...rest] = tuple3; // 解構前兩個元素，將剩餘元素放入另一個陣列

console.log(first);  // 1
console.log(second); // "hello"
console.log(rest);   // [true, 2024]


let tuple4: [string, number?, boolean?] = ["hello"];
let [p1, p2 = 0, p3 = false] = tuple4; // 解構可選元素，並給予初始值
// let [p1, p2, p3] = tuple4; // 解構可選元素，並給予初始值

console.log(p1);  // "hello"
console.log(p2);  // 0，若沒給初始值會是 undefined
console.log(p3); // false，若沒給初始值會是 undefined