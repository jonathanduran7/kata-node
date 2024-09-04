export const longest = (s1:string, s2:string): string => {
    return s1
    .concat(s2)
    .split('')
    .sort()
    .filter((value,index,array) => array.indexOf(value)=== index)
    .join('')
}

const textA = 'aasdsssddd'
const textB = 'cccceeee'

console.log(longest(textA,textB))
