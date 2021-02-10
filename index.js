//1
//console.log(arrOfNumbers.reduce(maxNumber))
//console.log(arrOfNumbers.reduce(minNumber))
let arrOfNumbers = [
    4, -2, 5, 19, -130, 0, 10
];


let maxNumber = (a, b) => {
    return a > b ? a : b;
},
    minNumber = (a, b) => {
        return a < b ? a : b
    };


    //2
// [ 12, 15, 20, 25, 59, 79].average();
    Array.prototype.average = function() {
        let sum = 0;
        let count = this.length;
        for (i=0; i<count; i++) {
          sum += this[i];
        }
        return sum/count;
      }


//3

function randomInteger(min, max) {
    
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  
  console.log( randomInteger() );

  //4


  const range = 100; // максимальное значение (1..100 включительно)
  const count = 10;      // кол-во требуемых чисел
  
  let m = {};
  let a = [];
  for (let i = 0; i < count; ++i) {
    let r = Math.floor(Math.random() * (range - i));
    a.push(((r in m) ? m[r] : r) + 1);
    let l = range - i - 1;
    m[r] = (l in m) ? m[l] : l;
  }
  
  console.log(a);