// 重載簽名 overload signatures
function greet(name: string): string;
function greet(age: number): string;
// function greet(id: number,): string;

// 實施簽名 Implementation Signature
function greet(value: string | number): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else {
        return `You are ${value} years old.`;
    }
}


console.log(greet("Alice"));  // ✅ Hello, Alice!
console.log(greet(25));       // ✅ You are 25 years old.
