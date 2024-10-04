interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}
// ❌ 錯誤示範 Argument of type 'number' is not assignable to parameter of type 'Lengthwise'.
// loggingIdentity(3);
// ✅ Pass
loggingIdentity({ length: 10, value: 3 });


function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");
// ❌ 錯誤示範 Argument of type '"m"' is not assignable to parameter of type '"a" | "b" | "c" | "d"'.
// getProperty(x, "m");



// 介面的 keyof
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person;


// 陣列的 keyof
let numbers: number[] = [1, 2, 3];
type ArrayKeys = keyof typeof numbers;  // type ArrayKeys = number | "length" | "push" | "pop" | ...

// const array: ArrayKeys = "";


// 元組的 keyof
let tuple: [string, number] = ["hello", 42];
type TupleKeys = keyof typeof tuple;  // type TupleKeys = "0" | "1" | "length" | "push" | "pop" | ...

// const tuple2: TupleKeys = "";


// 泛型介面(Generic Interface)
interface Container<T> {
  value: T;
  add(value: T): void;
}


// 泛型類別（Generic Classes）
class Box<T> {
  private contents: T;

  constructor(value: T) {
      this.contents = value;
  }

  get(): T {
      return this.contents;
  }

  set(value: T): void {
      this.contents = value;
  }
}

let stringBox = new Box<string>("hello");  // hello
let numberBox = new Box<number>(123);      // 123


// 牛刀小試答案
interface WithID {
  id: string;
}
// 👇 調整為泛型函式，並使用 WithID 做為泛型約束的條件
function filterItems<T extends WithID>(items: T[]) {
  return items.filter(item => item.id.startsWith("#"));
}

// ✅ Pass
const filteredItems = filterItems([{ id: '#a' }, { id: '123' }]);

// ❌ Error 因為陣列中的物件沒有 id 屬性
// const errorFilteredItems = filterItems([{ name: 1 }, { name: 2 }]);