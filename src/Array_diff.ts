export function arrayDiff(a: number[], b: number[]): number[] {  
  return a.filter(e => !b.includes(e));
}

const a = [3, 4];
const b = [4];

console.log(arrayDiff(a,b));