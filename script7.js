//Say hello, whats you name?
let name = prompt('Hello what is your name?', ["John Doe"]);


//Give back the name of the user, welcome 'name' to the Game. 
alert('Welcome to the game ' + name + '!')

//Guess a number between 0 and 10.  prompt
let UserNumber = parseInt(prompt('Guess a number between 0 and 10 ', [0]))

//computer randomly genrates number too. 
let CompNumber = Math.floor(Math.random() * 10);
//Math.floor(Math.random()*10);
let times = 1


//if its not correct, or number is not between 0 and 10. Your number was not correct, guess again
//or That was not a number between 0 and 10. try again.
while (UserNumber !== CompNumber && times < 5) {
  if (UserNumber < 0 || UserNumber > 10) {
    alert('This number is not between 0 and 10. Try again. You have ' + (5 - times) + ' times left')
  } else {
    alert("You said " + UserNumber + ' This was not correct. Try again. You have ' + (5 - times) + ' times left')
  }
  UserNumber = parseInt(prompt('Guess a number between 0 and 10', [0]))
  times++;
}


//If it is correct. You guessed the number! Congratulations!
if (UserNumber === CompNumber) {
  alert('You said ' + UserNumber + ' This was correct. Congratulations!')
}

alert('Game is over, ' + name + ' thanks for playing!');

