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
    
 MakeNumber('jgl6785lghjkdt896969j');