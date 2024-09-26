let a; // let a: any

// ✅ 以下都是 Pass
let anyValue: any;
anyValue = 0;
anyValue = true;
anyValue = 'hello';
anyValue = [1, 2, 3];
anyValue = { x: 1, y: 2 };
anyValue = function () { };
anyValue = () => { };
anyValue = class { };
anyValue = new Date();
anyValue = null;
anyValue = undefined;
anyValue = Symbol('hello');

let str: string = anyValue;
let num: number = anyValue;
let bool: boolean = anyValue;
let obj: object = anyValue;


// ================================================

let obj2: any = { x: 0 } // 拿掉 any  就會報錯了
obj2.foo();
obj2();
obj2.bar = 100;
obj2 = "hello";
const n: number = obj2;

// ================================================

// noImplicitAny 設置為 true，下面這段就會報錯
// Parameter 's' implicitly has an 'any' type.
function fn(s) {
  console.log(s.foo());
}