var quotes = [
  {
    quote: "Just as a candle cannot burn without fire, men cannot live without a spiritual life",
    name: "Buddha"
  },

  {
    quote: "Happiness cannot be traveled to, owned, earned, worn or consumed. Happiness is the spiritual experience of living every minute with love, grace, and gratitude",
    name:  "Denis Waitley"
  },

  {quote: "It is through gratitude for the present moment that the spiritual dimension of life opens up",
   name: "Eckhart Tolle"
 },

  {quote: "Our generation has had no Great war, no Great Dpression. Our war is spiritual. Our depression is our lives.",
   name: "Chuck Palahnuik"
 },

 {
  quote: "Our scientific power has outrun our spiritual power. We have guided missiles, and misguided men.",
  name:  "Martin Luther King, Jr."
},

{
  quote: "There is a muscular energy in sunlight corresponding to the spiritual energy of wind.",  name: "Annie Dillard"
},

{
  quote: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.",
  name: "Pierre Teilhard de Chardin"
},

{
  quote: "Men cannot live without joy; therefore when he is deprived of true spiritual joys it is necessary that he become addicted to carnal pleasures.",
  name: "Thomas Aquinas"
},

{
  quote: "You have to grow from the inside out. no one can teach you, none can make you spiritual. There is no other teacher but your own soul.",
  name: "Swami Vivekananda"
},

{
  quote: "A rebirth out of spiritual adversity causes us to become new creatures.",
  name: "James E. Faust"
},

{
  quote: "You can't have a physical transformation until you have a spiritual transformation.",  name: "Cory Booker"
},

{
  quote: "Music is the mediator between the spiritual and the sensual life.",
  name: "Ludwig van Beethoven"
},

{
  quote: "The key to success is to keep growing in all areas of life - mental, emotional, physical, as well as spiritual.",
  name: "Julius Erving"
}
]

var colours = [
  "#69D2E7", "#A7DBD8", "#E0E4CC", "#F38630", "#FA6900", "#FA6310"
]

function newQuote() {

  var randomNumber = Math.floor(Math.random() * (quotes.length));
  var elem = quotes[randomNumber]
  updateQuote(elem.quote)
  updateAuthor(elem.name)

  var randomColour = colours[Math.floor(Math.random() * (colours.length))];

  changeBackgroundColour(randomColour);
  changeTextColour(randomColour);
  changeButtonColour(randomColour);
  changeTwitterButtonColour(randomColour);
  changeaAuthorColour(randomColour);
}

function updateQuote(q) {
  document.getElementById('theQuote').innerHTML = q;
}

function updateAuthor(name) {
  document.getElementById('theAuthor').innerHTML = name;
}

function changeBackgroundColour(colour) {
  document.getElementsByTagName('body')[0].style.background = colour;
}

function changeTextColour(colour) {
  document.getElementById('theQuote').style.color = colour;
}

function changeButtonColour(colour) {
  document.getElementsByClassName('new-quote')[0].style.background = colour;
}

function changeTwitterButtonColour(colour) {
  document.getElementsByClassName('twitter')[0].children[0].style.color = colour;
}

function changeaAuthorColour(colour) {
  document.getElementById('theAuthor').style.color = colour;
}

newQuote();
