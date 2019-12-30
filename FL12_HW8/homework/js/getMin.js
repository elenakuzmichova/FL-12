function getMin () {
    let numbers = [...arguments];
    let currentIndex = 0;
    let min = numbers[currentIndex];
    for (let i = currentIndex + 1; i <= numbers.length - 1; i++) {
      if (numbers[i] < min) {
        min = numbers[i];    
      }
    }
    return min;
  }
  getMin(3,4,6,7,1,5);