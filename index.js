const arr = [5,10,2,3,6];

function double(x){
    return x*2;
}

const output= arr.map(double);
console.log(output)

function isEven(x){
 return x % 2 === 0;
}

const filterop = arr.filter(isEven);
console.log(filterop);