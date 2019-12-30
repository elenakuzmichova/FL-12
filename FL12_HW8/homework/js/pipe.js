function addOne(x) {
    return x+1;
}

function pipe(number, ...args) {

for (let i=0; i < args.length; i++) {
    number = args[i](number);
}
return number;
}

pipe(2,addOne,addOne,addOne);

