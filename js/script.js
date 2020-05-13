const quote = document.querySelector(".quote");
const qSource = document.querySelector(".source");
const body = document.getElementsByTagName("BODY")[0];

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Work like there is someone working 24 hours a day to take it all away from you.",
    source: "Mark Cuban",
    citation: "goalcast.com", 
    year: 2018,
    tag: "business"
  },
  {
    quote: "Price is what you pay. Value is what you get.",
    source: "Warren Buffet",
    citation: "fool.com", 
    year: 2019,
    tag: "business"
  },
  {
    quote: "Everything negative – pressure, challenges – is all an opportunity for me to rise.",
    source: "Kobe Bryant",
    citation: "goalcast.com", 
    year: 2018,
    tag: "sports"
  },
  {
    quote: "I love to compete. That's the essence of who I am.",
    source: "Tiger Woods",
    citation: "brainyquote.com", 
    year: 2020,
    tag: "sports"
  },
  {
    quote: "I was born to make mistakes, not to fake perfection.",
    source: "Drake",
    citation: "wealthygorilla.com", 
    year: 2015,
    tag: "music"
  }
]


/***
 * `getRandomQuote` function
***/

let newQuoteValidator;
function getRandomQuote () {
  let quoteIndex = Math.floor(Math.random() * quotes.length);
  // prevents same quote from being displayed consecutively
  if (newQuoteValidator != quoteIndex) {
    // stores the new quote index for next time the function runs
    newQuoteValidator = quoteIndex;
  } else {
    // A different quote will be assigned, if same quote was previously selected
    quoteIndex = Math.floor(Math.random() * quotes.length);
  }
  return quotes[quoteIndex]
}

/***
 * `randomBGColor` function
***/
function randomBGColor () {
  // returns a rgb value
  function randomRGBValue () {
    const RGBValue = Math.floor( Math.random() * 255); 
    return RGBValue
  }
  // stores a random RGB value for each variable
  let red = randomRGBValue();
  let green = randomRGBValue();
  let blue = randomRGBValue();
  
  // change BG color of body to a new RGB color
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

/***
 * `printQuote` function
***/
function printQuote () {
  // retrieves new quote from quotes array
  const newQuote = getRandomQuote();
  // updates quote
  quote.textContent = newQuote.quote;
  qSource.innerHTML = `<p class"source">${newQuote.source}
                          <span class="citation">${newQuote.citation}</span>
                          <span class="year">${newQuote.year}</span>
                          <span class="tag">${newQuote.tag}</span>
                        </p>`;
  // chnages background to a random color
  randomBGColor();
}
// prints a quote once page is loaded
printQuote()
// prints a neww quote very 10 seconds
setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);