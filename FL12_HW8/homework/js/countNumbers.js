function MakeNumber(String) {
    let result = '';
    let letters = String.split('');
    for (let i=0; i < letters.length; i++) {
            if(!isNaN(letters[i])) {
        result += letters[i];
            } 
        }
    return result;
    }

function countNumbers (String) {
    let numbers = MakeNumber(String);
    let numbersObject = {}
    for (let i=0; i < numbers.length; i++) {
        if (numbersObject[numbers[i]]) {
            numbersObject[numbers[i]]++;
        } else {
            numbersObject[numbers[i]] = 1;
        }
    }
    return numbersObject;
}
countNumbers('htyse334578gffygu76');