interface Container<T, U> {
  element: T;
  children: U;
}
// 無參數調用的情況
declare function create(): Container<HTMLDivElement, HTMLDivElement[]>;

// 指定型別參數 T
declare function create<T extends HTMLElement>(element: T): Container<T, T[]>;

// 指定型別參數 T, U
declare function create<T extends HTMLElement, U extends HTMLElement>(
  element: T,
  children: U[]
): Container<T, U[]>;

// 泛型參數提供預設值
declare function create<T extends HTMLElement = HTMLDivElement, U extends HTMLElement[] = T[]>(
  element?: T,
  children?: U
): Container<T, U>;

// 泛型與 type alias 的應用

// 定義一個型別別名泛型，包含 Data 和 Error
type ApiResponse<Data, Error> = {
  success: boolean;
  data: Data;
  error: Error;
};

// 使用型別別名和泛型創建具體的型別
let response1: ApiResponse<string, string> = {
  success: true,
  data: "Data loaded successfully",
  error: ""
};

let response2: ApiResponse<{ items: number }, Error> = {
  success: false,
  data: { items: 0 },
  error: new Error("Failed to load data")
};

// 牛刀小試答案
type Entry<T extends { name: string }> = {
  id: string;
  data: T;
};

// 使用时：
const userEntry: Entry<{ name: string; age: number }> = {
  id: "user1",
  data: { name: "John Doe", age: 30 }
};

const productEntry: Entry<{ name: string; price: number }> = {
  id: "product1",
  data: { name: "Apple iPhone 13", price: 799 }
};