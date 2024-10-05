// 基本範例
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string; // ✅ type Example1 = number
type Example2 = RegExp extends Animal ? number : string; // ✅ type Example2 = string



// 進階範例：條件型別 + 泛型
interface IdLabel {
  id: number;
}
interface NameLabel {
  name: string;
}

// 下面這些函式簽名有做簡化，請往下看
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}

// 上述 code 簡化後
// 條件型別的語句
// type NameOrId<T extends number | string> = T extends number ? IdLabel : NameLabel;

// // 條件型別的實現
// function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
//   throw "unimplemented";
// }

// let a = createLabel("typescript");                  // ✅ let a: NameLabel
// let b = createLabel(2.8);                           // ✅ let b: IdLabel
// let c = createLabel(Math.random() ? "hello" : 42);  // ✅  let c: NameLabel | IdLabel



// 條件型別的約束(constraints)
// ❌ 錯誤示範
// type MessageOf<T> = T["message"];
// ✅ 正確示範
type MessageOf<T extends { message: unknown }> = T["message"];

// 使用 與 加入條件型別
interface Email {
  message: string;
}
interface Dog {
  bark(): void;
}

type EmailMessageContents = MessageOf<Email>;
// 條件型別 (要把 49 註解，否則會噴錯)
// type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
// type EmailMsgContents = MessageOf<Email>; // ✅ type EmailMsgContents = string
// type DogMsgContents = MessageOf<Dog>;     // ✅ type DogMessageContents = never



// 條件型別的推斷(infer)
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type NumbersArray = Flatten<number[]>;  // ✅ type NumbersArray = number
type StringVal = Flatten<string>;       // ✅ type StringVal =  string


// 條件型別的可分配性(distributive)
type IsString<T> = T extends string ? 'Yes' : 'No';

// 聯合型別
type MixedTypes = string | number | boolean;

// 聯合型別 結合「條件型別」
type Result = IsString<MixedTypes>;  // Result 的型別會是 'Yes' | 'No'

// 若不想有可分配性，可使用元組來封裝
type NonDistributive<T> = [T] extends [string] ? 'Yes' : 'No';