function countEvenNumbers(numbers) {
    let evenCount = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        evenCount++;
      }
    }
  
    return evenCount;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log(countEvenNumbers(numbers));
