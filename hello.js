const Quote = require("inspirational-quotes");
var cowsay = require("cowsay");

const quote = Quote.getRandomQuote(); // return any random quote

console.log(
  cowsay.say({
    text: quote,
  })
);
