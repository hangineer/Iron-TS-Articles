// ❌ 錯誤示範
function printId(id: string & number) {
  console.log(id);
};
// printId('123'); // ❌
// printId(123); // ❌


// ✅ 正確示範
type Person = {
  name: string;
  age: number;
};

type Employee = {
  employeeId: number;
  department: string;
};

type EmployeePerson = Person & Employee; // 交集型別

let employee: EmployeePerson = {  // ✅ Pass
  name: "John",
  age: 30,
  employeeId: 12345,
  department: "Engineering"
};

// ❌ 錯誤示範
type A = {
  value: number; // 屬性相同
};

type B = {
  value: string;  // 屬性相同
};

type C = A & B;

// let test: C = { value: 123 };  // ❌



// ❌ 不要在 overloads(超載)上，分別對「同一個參數」定義多個型別
interface Moment {
  utcOffset(): number;
  utcOffset(b: number): Moment;
  utcOffset(b: string): Moment;
}

// ✅ 可以使用「聯合型別」
// interface Moment {
//   utcOffset(): number;
//   utcOffset(b: number | string): Moment;
// }