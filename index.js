const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }
 
  return gifts;
}
 
wrapGifts(gifts);

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";

function writeCards(names, event){
  for (let i = 0; i < names.length; i++){
    console.log(`Thank you, ${names[i]} for the wonderful ${event} gift!`);
  }
  return names 
}
