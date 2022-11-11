//normal function a*b ni hesabliyir
//anonymous function Ad ve soyad gelecek full name geri donmelidi
//arrow function ile 5 dene eded gelecek. Ededlerin 4-e bolendeki qaliqlari 2 den boyuk ve beraber olanlarin hasilini qaytarsin

// function hasil(a=1,b){
//     return a*b;
// }

// console.log(hasil(3,7))

// const getFullName=function(name,surname){
//     return name+" "+surname
// }

// console.log(getFullName("Zahid","Mamedov"));

//  const arr = [11, 7, 31, 212, 13];
// let result = 1;
// const sumNumbers = (num) => {
//   if (num % 4 >= 2) result *= num;
//   return result
// };

// arr.forEach(element=>{
//    console.log( sumNumbers(element))
// })


// for (let i = 1; i < 10; i++){
//     console.log( sumNumbers(i))
   
// }


// const productNumber=(arr)=>{
//     let  result=1;

//     arr.forEach(element=>{
//         if (element % 4 >= 2) result *= element;
//     })
//     return result;
// }   

// console.log(productNumber([5]))

const arr=['3X(Eli)','Amil','Seida']
console.log(arr);

arr.push("Murad")
console.log(arr);
arr.pop()
console.log(arr);

arr.shift()
console.log(arr);

arr.unshift("Wlcome 3x(Eli)")
arr.unshift("Wlcome 2x(Eli)")
arr.unshift("Wlcome 1x(Eli)")
arr.unshift("Wlcome 0x(Eli)")

console.log(arr);
console.log(arr.splice(1,3))
let text = "5";
let padded = text.padEnd(4,"x");
console.log(padded);

