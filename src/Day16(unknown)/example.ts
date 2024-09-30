// unknown 可以接受任何型別的值(any 也是)
let a: any;
let u: unknown;

// ✅ 以下都是 Pass
a = 10;
a = 'Hello';
a = true;
a = { key: 'value' };

u = 10;
u = 'Hello';
u = true;
u = { key: 'value' };

// ==============================================

// unknown 不能直接對值進行操作

// function f1(v1: any) {
//   v1.b(); // ✅ Pass
// }
// // ❌ 錯誤示範
// function f2(v2: unknown) {
//   v2.b();      // ❌ 'a' is of type 'unknown'.
//   v2.foo.bar;  // 同上
//   v2.trim();   // 同上
//   v2();        // 同上
//   new v2();    // 同上
//   v2[1];       // 同上
// }


// ==============================================

// unknown 能指派給 any 或它自己，但不能直接指派給其他型別，除非進行型別斷言或型別守衛

let value1: unknown;
let value2: any = value1; // ✅ Pass，unknown 可以指派給 any
let value3: unknown = value1; // ✅ Pass，unknown 可以指派給 unknown
let str: string;
// str = value1;   // ❌ unknown 不能直接指派給字串，Type 'unknown' is not assignable to type 'string'.
// let num: number = value1;   // ❌ unknown 不能直接指派給數字，Type 'unknown' is not assignable to type 'number'.
// let booleanVal: boolean = value1; // ❌ ...
// let objectVal: object = value1; // ❌ ...
// let arr: any[] = value1; // ❌ ...
// let f1: Function = value1; // ❌ ...

// 需要進行型別斷言或型別守衛才能賦值給其他型別
if (typeof value1 === 'string') {
  str = value1;     // ✅ Pass，已經檢查過是字串
}


// ==============================================

// Narrowing

// 1. typeof

let value: unknown;
if (typeof value === 'string') {
  console.log(value.toUpperCase()); // ✅ Pass
}


// 2. instanceof
// instanceof
class Person {
  constructor(public name: string) {
    // ... 略 ...
  };
  sayHello() {
    return `Hello ${this.name}`;
  };
}

class Animal {
  constructor(public species: string) {
    // ... 略 ...
  };
  makeSound() {
    return `${this.species} makes a sound`;
  };
}

function greet(value: unknown) {
  if (value instanceof Person) { // ✅ Pass
    console.log(value.sayHello());
  } else if (value instanceof Animal) { // ✅ Pass
    console.log(value.makeSound());
  } else {
    console.log('Unknown type');
  }
}

const john = new Person('John');
const dog = new Animal('Dog');

greet(john);  // Hello John
greet(dog);   // Dog makes a sound
greet(123);   // Unknown type


// 3. Type Predicate (型別謂詞）
type Animals = {
  type: string;
};

type Dog = Animals & {
  bark: () => void;
};

function isDog(animal: unknown): animal is Dog {
  return (animal as Animals).type === 'dog';
}

console.log(isDog({ type: 'dog' }));  // true
console.log(isDog({ type: 'human' }));  // false

// ==============================================

// 型別斷言(Type Assertions) + unknown

const unknownVal: unknown = 1;
const numVal: number = unknownVal as number;
console.log(numVal + 1); // ✅ Pass, 2
// ❌ 錯誤示範
// console.log(unknownVal + 1)