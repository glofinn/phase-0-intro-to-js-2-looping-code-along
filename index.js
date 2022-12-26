// const gifts = ["Teddy Bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }
//   return gifts;
// }
// wrapGifts(gifts);

function writeCards(stringNames, event) {
  const names = [];
  for (let i = 0; i < stringNames.length; i++) {
    names.push(
      `Thank you, ${stringNames[i]}, for the wonderful ${event} gift!`
    );
  }
  return names;
}

function countDown() {
  let count = 10;
  while (count >= 0) {
    console.log(count--);
  }
}
