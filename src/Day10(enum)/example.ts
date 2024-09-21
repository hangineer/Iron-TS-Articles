// Numeric Enums 數字列舉
enum Direction {
  Up,
  Down,
  Left,
  Right,
};

console.log(Direction.Up);    // 0
console.log(Direction.Down);  // 1
console.log(Direction.Left);  // 2
console.log(Direction.Right); // 3

// 手動賦值
enum Direction2 {
  Up = 2,
  Down = 1,
  Left,
  Right,
};

console.log(Direction2.Up);    // 2
console.log(Direction2.Down);  // 1
console.log(Direction2.Left);  // 2 重複了！
console.log(Direction2.Right); // 3


// String Enums 字串列舉
enum StrDirection {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",  // 把值拿掉會報錯 Enum member must have initializer.
}

// 異構列舉（Heterogeneous enums）
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

enum Set {
  // constant members
  A,
  B = 5,
  C = 1 + 2,
  D = 1 - 3,
  E = 2 * 2,
  // computed members
  F = "123".length,
  // G,  // ❌ Enum member must have initializer.
}


// 反向查找 ＆ 雙向映射
enum ReverseMapping {
  A,
};

console.log(ReverseMapping.A)  // 0
console.log(ReverseMapping[0]) // A

enum Direct {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
console.log(Direct.Up);     // UP
console.log(Direct["UP"]);  // undefined



// 其他範例
enum TaskStatus {
  Pending,
  InProgress,
  Completed,
};
let tasks: {title: string, status: TaskStatus}[] = [];  // 格式為陣列包物件

function title (title: string) {
  tasks.push({
    title,
    status: TaskStatus.Completed,
  });
};

title('寫鐵人賽');

console.log('tasks', tasks); // [ { title: '寫鐵人賽', status: 2 } ]