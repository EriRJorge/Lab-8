function playGuessingGame(numToGuess, totalGuesses = 10) {
    let numGuesses = 0;
    let guess;

    while (numGuesses < totalGuesses) {
      guess = prompt(numGuesses === 0 ? "Enter a number between 1 and 100." :
        (guess < numToGuess ? `${guess} is too small. Guess a larger number.` :
          `${guess} is too large. Guess a smaller number.`));

      if (guess === null) {
        return 0;
      }

      const guessNumber = parseInt(guess);

      if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
        alert("Please enter a valid number between 1 and 100.");
        continue;
      }

      numGuesses++;

      if (guessNumber === numToGuess) {
        return numGuesses;
      }
    }

    return 0;
  }
  