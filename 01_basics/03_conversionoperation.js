let score = "99"

// const {score} = req.body
console.log(typeof score);
console.log(typeof (score));

 let valueInNumber = Number(score)
 console.log(typeof valueInNumber); 
 console.log(valueInNumber)
// abc hoga no sath to value aegi not a number naN 
// agr value null hoti to output atta 0 for matching temp 
// agr value undefined hoti to output atta naN 
// boolean values true false pr 1 0r 0 aega obvvv
// or koi string hoga to bi naN mtlb name hoga to vo convert nhi ho skta
// "33" => 33
// "33abs" => NaN
// true or false => 1 0r 0
let isLoggedIn =1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
// 1 or 0 => true and false;
// "" => false 
// "harshit"=> true
let someNumber = 12

let stringSomeNumber = String(someNumber)

console.log(stringSomeNumber)
console.log(typeof stringSomeNumber)

// jchiowncowecnio "OPERATIONS" CBBCWICNEWINC 
 
let value = 3
let negValue = -value
// console.log(negValue );

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**5);
// console.log(2%3); cryptography

let str1 = "Harshit "
let str2 = "is handsome"
let str3 = str1+str2
console.log(str3)
 
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
// string first h to sbhi ko string me treat kiya jaega 
// normal h to fir phle conversion hoga fir string type wale implement honge   

console.log(+true); 
console.log(+""); 

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
++gameCounter
console.log(gameCounter );
f



// https://tc39.es/ecma262/#sec-type-conversion link for type converstion
