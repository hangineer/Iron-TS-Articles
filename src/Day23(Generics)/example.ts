// 範例1: 泛型函式
function hello<T>(data: T) {
  console.log(data);
};

hello<string>("Jack");   // ✅ 印出 Jack，data 參數型別會被代入為 string
// hello<string>(123);      // ❌ 型別錯誤
hello<number>(123)       // ✅ 印出 123，data 參數型別會被代入為 number




// 型別參數可自由命名
function areItemsEqual<ItemType>(item1: ItemType, item2: ItemType): boolean {
  return item1 === item2;
}

// 型別參數可用在回傳上
// function hello<T>(data: T): T {
//   return data;
// };


// 範例2: 多個參數的情況
// `T` 和 `U` 是型別參數，表示兩個不同的型別
function combine<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// 👍🏻 推薦：可以使用型別推論寫法
const a = combine("world", 123);
console.log(a); // [world, 123]

// 也可以使用型別註釋
const b = combine<string, number>("world", 123);
console.log(b); // [world, 123]

// ❌ 故意出錯的型別註釋
// const c = combine<string, string>("world", 123);