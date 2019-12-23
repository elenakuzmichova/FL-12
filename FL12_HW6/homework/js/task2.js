var a = prompt("Enter a","");
var b = prompt("Enter b","");
var c = prompt("Enter c","");

a = parseInt(a);
b = parseInt(b);
c = parseInt(c);

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    alert("input values should be ONLY numbers");
} else {
    if (a === 0 || b === 0 || c === 0) {
        alert("A triangle must have 3 sides with a positive definite length");
    } else {
        if (a + b < c || b + c < a || a + c < b) {
            alert("Triangle doesn’t exist");
        } else {
            if (a === b && b !== c || b === c && c !== a || a === c && c !== b) {
                alert("Isosceles triangle");
            }
            if (a === b && b === c && c === a) {
                alert("Equilateral triangle");
            }
            if (a !== b && a !== c) {
                alert("Scalene triangle");
            }
        }
    }
}