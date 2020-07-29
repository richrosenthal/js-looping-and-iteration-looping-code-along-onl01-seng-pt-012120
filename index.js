
const names = [];
const event = "birthday";
const messages = [];
const number = 10; 

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return messages 
}

writeCards(names, event);

function countDown(number){
  while (number > -1){
    console.log(number)
    number = number - 1 
  }
}