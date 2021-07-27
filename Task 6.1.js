let myArray = [1, 2, 10, 99, 0, 'test'];

function arrCheck(arr){

let even = 0;
let odd = 0;
let nulls = 0;
let str = 0;
for(let i = 0; i < myArray.length; i++){
    let x = myArray[i];
    if(typeof x == 'number' && x % 2 == 0 && x != 0){
        even++;
    }else if(typeof x == 'number' && x % 2 != 0 && x != 0){
        odd++;
    }else if(typeof x == 'string'){
        str++;
    }else if(x == 0){
        nulls++;
    }
  }
  
console.log('Чётные числа ' + even + '\nНечётные числа ' + odd + '\nСтрок ' + str + '\nНулей ' + nulls);
}

arrCheck(myArray);