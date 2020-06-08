// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
      
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
//   }
  
//   console.log(copyMachine([true, false, true], 2));
  

const array1 = [false,null,undefined,3,'dog'];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
