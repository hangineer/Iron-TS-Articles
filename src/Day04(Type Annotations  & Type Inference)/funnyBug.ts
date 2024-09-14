const name: string = 'hannah';

export {}; // 可以試著把這段註解，看看會發生什麼事

/*
另一個解法是
也可以把 tsconfig.json 中的 moduleDetection 改為 force
這樣就會強制 TypeScript 將沒有 import 或 export 的檔案強制視為 module 而不是 script
*/