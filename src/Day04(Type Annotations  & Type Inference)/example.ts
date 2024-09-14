// 1
const playSong = (artistName: string, year: number) => {
  return `In ${year}, everyone love ${artistName}.`;
};

const artist: string = "Lady Gaga";
const year: number = 2024;

playSong(artist, year);
// playSong('Taylor Swift', '2024'); // ❌ Argument of type 'string' is not assignable to parameter of type 'number'.



// 2
let x = [0, 1, null];   // let x: (number | null)[]



// 3
function multiple(a: number, b: number) {
  const result = a * b; // 型別推斷 const result: number
  return result;
}



// 4
let a; // 推斷為 :any
a = 1;
a = 2;
a = '3'; // ✅ Pass


let b = 1;
b = 2;
// b = '3' // ❌ Type 'string' is not assignable to type 'number'.