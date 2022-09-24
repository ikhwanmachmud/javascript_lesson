let answer = "";

for (let number = 0; number < 50; number++) {
  let currentNumber = number;
  

  if (number % 3 ===  0 && number % 5 === 0) {
    currentNumber = "Boom Wow"
  } else if ( number % 3 ===  0) {
    currentNumber = "Boom"
  } else if (number % 5 === 0) {
    currentNumber = "Wow"
}

 answer = answer + `${currentNumber}, `;   

 console.log(answer);
}
