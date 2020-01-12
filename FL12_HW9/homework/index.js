const a = 1, b = 2, c = 3, d = 5, e = 6, f =7, g =8, h = 14, j = 29, k = 31, l = 48, m = 58, n = 2019;
function convert(...args) {
    for (let i=0; i < args.length; i++) {
        typeof args[i] === 'string' ? args[i] = parseInt(args[i]) : args[i]=`${args[i]}`;
    }
    return args;
}
convert('1', b, '3', '8', e);

function executeforEach(array,func) {
    for (let i=0; i < array.length; i++) {
        array[i]=func(array[i]);
    }
}
executeforEach([a, b, c], function(el){ 
    console.log(el * b) 
});

function mapArray(array,func) {
    executeforEach(array, el => parseInt(el));
    executeforEach(array,func);
    return array;
}
mapArray([b, '5', g], function(el){
    return el + c
});

function filterArray (array, func) {
    let result = [];
    executeforEach(array, el => func(el) ? result.push(el) : '');
    return result;
}
filterArray([b, d, g], function(el){
    return el % b === 0 
});

function flipOver(text) {
    let result='';
    for (let i=1; i<text.length+1; i++) {
        result+=text[text.length-i];
    }
    return result;
}
flipOver('hey world');

function makeListFromRange (args) {
    let numbers = [];
    for (let i=args[0]; i<=args[1]; i++) {
        numbers.push(i);
    }
    return numbers;
}
makeListFromRange([b, f]); 

function getArrayOfKeys (array,keyName) {
    let result = [];
    executeforEach(array, el => result.push(el[keyName]));
    return result;
}
const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];
  
getArrayOfKeys(actors, 'name'); 

function substitute (array) {  
    const number = 30;  
    mapArray(array, el => el < number ? '*' : el);
    return array;
}
substitute([m, h, l, b, k, j]);


function getPastDay (date, daysNumber) {
    const milisecondsPerDay = 86400000;
    return new Date(date - daysNumber * milisecondsPerDay).getDate();  
}
const date = new Date(n, 0, b);
getPastDay(date, 1); 

function formatDate (date) {
    const ten = 10;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let roundZero = number => number < ten ? '0' + number : number;
    let hours = roundZero(date.getHours());
    let minutes = roundZero(date.getMinutes());
  return `${year}/${month}/${day} ${hours}:${minutes}`;
}
formatDate(new Date());

