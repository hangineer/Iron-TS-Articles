// 物件的屬性分隔可以使用「分號、「逗號」、甚至「省略不寫」也沒關係

// 範例 1： 符合物件定義的格式、型別
let product: {
  name: string;
  price: number;
  category: string;
  inStock: boolean;
}

// 賦值
product = {
  name: 'Apple',
  price: 10,
  category: 'Fruit',
  inStock: true
}


// 範例 2: 更改物件中的值
product.price = 100; // ✅ Pass
// product.price = '100'; // ❌ Type 'string' is not assignable to type 'number'.
product.inStock = false;


// 範例 3：「不」符合物件定義的格式、型別
// product = {
//   name: 'Apple',
//   price: 10,
//   category: 'Fruit',
// }

// product.inStock = false;
// product['inStock'] = false;


// 範例 4: 新增外來屬性（noImplicitAny 為 true）
// product.id = 'v231323'; // ❌ Property 'id' does not exist on type '{ name: string; price: number; category: string; inStock: boolean; }'.
product['id'] = 'v231323'; // noImplicitAny 為 true 時會報錯

console.log('product', product);
// product {
//   name: 'Apple',
//   price: 100,
//   category: 'Fruit',
//   inStock: false,
//   id: 'v231323'
// }


// 範例 5: 新增外來屬性（noImplicitAny 為 false）
// product.id = 'v231323'; // ❌
product['id'] = 'v231323'; // ✅ Pass