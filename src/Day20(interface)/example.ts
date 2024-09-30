// 物件的型別註釋
let book1 = {
  isbn: "23213121436547",
  title: "X 調查",
  author: 'will',
  year: 2024,
};

function printBook(book: { isbn: string, title: string, author: string, year: number }) {
  console.log(book.title); // X 調查
}
printBook(book1);


// 改成介面後
// 宣告介面
interface Book {
  readonly isbn: string
  title: string
  author: string
  year: number
};

let book2 = {
  isbn: "23213121436547",
  title: "X 調查",
  author: 'will',
  year: 2024,
};

// 使用介面
function printBook2(book: Book) {
  console.log('use interface', book.title); // X 調查
}
printBook2(book2);



let book3: Book = {
  isbn: "23213331423147", // ✅ Pass，創建時第一次被賦值(第 18 行 isbn 加了 readonly 前綴)
  title: "高敏感是種天賦",
  author: "伊爾斯·山德",
  year: 2010,
};
// book3.isbn = 'b12345'; // ❌ Cannot assign to 'isbn' because it is a read-only property.
book3.title = "高敏感是種天賦!!!"

console.log(book3)


// 擴展介面
// 定義一個基本介面
interface Person {
  name: string;
  age: number;
}

// 定義另一個介面，繼承 Person 並新增更多屬性
interface Employee extends Person {
  employeeId: number;
  department: string;
}

// 使用擴展後的介面來定義一個對象
let employee: Employee = {
  name: "Alice",
  age: 28,
  employeeId: 123456,
  department: "Human Resources"
};

// 定義一個介面，同時繼承多個介面
interface Manager extends Employee {
  hasTeam: boolean;
}

// 使用多重繼承的介面來定義一個對象
let manager: Manager = {
  name: "Bob",
  age: 34,
  employeeId: 654321,
  department: "Finance",
  hasTeam: true
};


// extends v.s implement
interface Greetable {
  greet(): void;
}

class Human implements Greetable {
  constructor(public name: string) {}
  greet() {
    console.log(this.name);
  }
}

const human = new Human("Alice");
human.greet(); // ✅ 會印出 Alice



// interface 名稱可重複
// ✅
interface Image {
  height: number;
  width: number;
}
// ✅
interface Image {
  type: string;
  title: string;
  resize(): void;
}

// 自動合併後的 Image 介面
// interface Image {
//   height: number;
//   width: number;
//   type: string;
//   title: string;
//   resize(): void;
// }


// type 則不行重複
// TODO: 下面若註解要打開，就要把上面 interface Image 給註解，否則會報錯

// ❌ Duplicate identifier 'Image'.
// type Image = {
//   height: number;
//   width: number;
// };

// ❌ Duplicate identifier 'Image'.
// type Image = {
//   type: string;
//   title: string;
//   resize(): void;
// };