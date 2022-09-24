let answer = "";

for (let number = 0; number < 50; number++) {
  let currentNumber = number;
  

  if (number % 3 ===  0 && number % 5 === 0) {
    currentNumber = "Fizz Buzz"
  } else if ( number % 3 ===  0) {
    currentNumber = "Fizz"
  } else if (number % 5 === 0) {
    currentNumber = "Buzz"
}

 answer = answer + `${currentNumber}, `;   

 console.log(answer);
}
