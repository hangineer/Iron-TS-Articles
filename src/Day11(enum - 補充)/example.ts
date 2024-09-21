// 1
const enum Set {
  A = 1,
  B = A * 2,
}


// 2
const enum Direction {
  Up,
  Down,
  Left,
  Right,
};
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right
];
console.log(directions); // [0 , 1, 2, 3]

// 3
const enum StrDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// 4.
enum Nan {
  a =  0 / 0,     // ✅ NaN Pass
}
enum Infinite {
  a = 1 / 0,      // ✅ Infinity Pass
}

// const enum Nan {
//   a =  0 / 0, // ❌ const' enum member initializer was evaluated to disallowed value 'NaN'.
// }
// const enum Infinite {
//   a = 1 / 0, // ❌ const enum member initializer was evaluated to disallowed value 'Infinity'.
// }


// enums at runtime
enum VerifyResult {
  Pending,
  Denied,
  Successful,
};

function getVerifyResult (obj: { Pending: number }) {  // ✅ VerifyResult 裡包含了 Pending, Successful
  return obj.Pending;
};
getVerifyResult(VerifyResult);



// enums at compile time
enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

type levelKey = keyof typeof LogLevel; // type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';

function printLog(key: levelKey, message: string) {
  const value = LogLevel[key];
  if (value <= LogLevel.WARN) {
    console.log(key);      // ERROR
    console.log(value);    // 0
    console.log(message);  // This is a msg
  }
}
printLog("ERROR", "This is a msg");