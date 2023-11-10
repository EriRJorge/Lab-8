function divideArray(numbers) {
    let evenNums = [];
    let oddNums = [];

    for (let number of numbers) {
      if (number % 2 === 0) {
        evenNums.push(number);
      } else { 
        oddNums.push(number);
      }
    }

    evenNums.sort(function (a, b) {
      return a - b;
    });
    oddNums.sort(function (a, b) {
      return a - b;
    });

    console.log("Even numbers:");
    if (evenNums.length === 0) {
      console.log("None");
    } else {
      evenNums.forEach(function (evenNumber) {
        console.log(evenNumber);
      });
    }

    console.log("Odd numbers:");
    if (oddNums.length === 0) {
      console.log("None");
    } else {
      oddNums.forEach(function (oddNumber) {
        console.log(oddNumber);
      });
    }
  }