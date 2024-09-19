// 重載簽名 overload signatures
function greet(name: string): string;
function greet(age: number): string;
// function greet(id: number,): string;

// 實施簽名 Implementation Signature
function greet(value: any): string {
    if (typeof value === "string") {
        return `Hello, ${value}!`;
    } else if (typeof value === "number") {
        return `You are ${value} years old.`;
    }
    return "Invalid type";
}


console.log(greet("Alice"));  // Hello, Alice!
console.log(greet(25));       // You are 25 years old.
