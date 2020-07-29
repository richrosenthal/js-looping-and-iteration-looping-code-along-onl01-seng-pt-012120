
const names = ["Lisa", "Kaitlin", "Jan"];
const event = "birthday";

function writeCards(names, event){
  messages = [];
  for (let i = 0; i < names.length; i++){
    messages.push(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
  }
  return messages 
}

writeCards(names, event);