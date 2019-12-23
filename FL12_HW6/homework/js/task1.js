var a = prompt("Enter a","");
var b = prompt("Enter b","");
var c = prompt("Enter c","");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
console.log("Invalid input data"); 
} else {

var discr = Math.pow(b,2) - 4*a*c;
if (discr < 0) {
    console.log("no solution"); 
}
if (discr === 0) {
    var x = -b / (2*a);
    console.log("x =",x);
}
if (discr > 0) {
    var x1 = Math.round((-b + Math.sqrt(discr))/(2*a));
    var x2 = Math.round((-b - Math.sqrt(discr))/(2*a));
    console.log("x1 = ",x1," and x2 = ",x2);
}
}
