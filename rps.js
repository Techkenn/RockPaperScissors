const getUserChoice = userInput => {
 userInput= userInput.toLowerCase();
 if (userInput==='rock'||userInput==='paper'||userInput==='scissors'||userInput==='bomb'){
   return userInput
 } else{console.log('invalid input')}
}
function getComputerChoice(){
randomNumber=Math.floor(Math.random()*3)
switch (randomNumber){
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors';
}
}
const determineWinner = (userChoice, computerChoice) =>{
  if (userChoice==='bomb')
  {return 'You Won with the cheat!!!!'}
  else if (userChoice===computerChoice){
    return 'Game is tied';
  } else {
    if(userChoice === 'rock'){
      if (computerChoice==='paper'){
        return 'Computer won'
      }
      else {return 'YOU WON!!!'}
    }
    if(userChoice === 'paper'){
      if (computerChoice==='scissors'){
        return 'Computer won'
      }
      else {return 'YOU WON!!!'}
    }
      if(userChoice === 'scissors'){
      if (computerChoice==='rock'){
        return 'Computer won'
      }
      else {return 'YOU WON!!!'}
  }
}
}

const playGame = () =>{
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
 console.log( determineWinner(userChoice, computerChoice));
};

playGame();
