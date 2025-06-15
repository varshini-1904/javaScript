/*
logical operators:
1. logical AND -- &&
2. logiacl OR -- ||
3. logical Not -- !
*/


/* AND -- &&:
    it returns true when both the operands are true.
   OR -- ||:
     it returns true when either one of the operand is true
   NOT -- !:
    it returns true when the operand is false and returns true when the operand is false
*/

var a = true
var b = false
console.log(a && b)
console.log(a || b)
console.log(!a)

/*
Bitwise operators:
1. AND -- &
2. OR -- |
3. XOR -- ^
4. NOT -- ~
5. left shift -- <<
2. right shift -- >>
*/

/*
AND -- &:
    it performs AND operation on each bit
OR -- |:
    it performs OR operation on each bit
XOR -- ^:
    when both the bits are similar it returns 1 or otherwise it returns 0
NOT -- ~:
    it performs NOT operation on each bit
left shift -- <<:
    it shifts bits to the left
right shift -- >>:
    it shift bits to the right
*/

let x = 5;  // 0101
let y = 3;  // 0011

console.log(x & y); 
console.log(x | y); 
console.log(x ^ y); //0110 
console.log(~x);   
console.log(x << 1); //1010
console.log(x >> 1); //0010
