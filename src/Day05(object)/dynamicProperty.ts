// 1. 索引簽名 (寫法一)
let product: { [key: string]: string };
product = {
  name: 'Apple',
};

// 2. 索引簽名 (寫法二)
// let product: {
//   name: string;
//   price: number;
//   category: string;
//   inStock: boolean;
//   [key: string]: any;
// };

// product = {
//   name: 'Apple',
//   price: 10,
//   category: 'Fruit',
//   inStock: true
// };


// 3. Record 型別
// let product: Record<string, any> = {
//   name: 'Apple',
//   price: 10,
// };




// 4. 可選屬性
// let product: {
//   name: string;
//   price: number;
//   category: string;
//   inStock: boolean;
//   id?: string; // 可選屬性
// };
// product = {
//   name: 'Apple',
//   price: 10,
//   category: 'Fruit',
//   inStock: true
// };



product.id = 'v231323'; // ✅ Pass

export {};