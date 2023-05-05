window.onload = go;
function go() {
  $("#new-quote").click(function() {
    genRandQuote();
  });
  
  $("#tweet-quote").click(function() {
    
  });

  genRandQuote();
}

function genRandQuote() {
  let quotes = [{
		id: 1,
		text: "Life is 10% what happens to you and 90% how you react to it",
		source: "Charles R. Swindol"
	},
	{
		id: 2,
		text: "He who is not courageous enough to take risks will accomplish nothing in life.",
		source: "Muhammad Ali"
	},
	{
		id: 3,
		text: "Man cannot discover new oceans unless he has the courage to lose sight of the shore.",
		source: "Andre Gide"
	},
	{
		id: 4,
		text: "If we don't discipline ourselves, the world will do it for us.",
		source: "William Feather"
	},
	{
		id: 5,
		text: "Rule your mind or it will rule you.",
		source: "Horace"
	},
	{
		id: 6,
		text: "All that we are is the result of what we have thought.",
		source: "Buddha"
	},
	{
		id: 7,
		text: "Doing just a little bit during the time we have available puts you that much further ahead than if you took no action at all.",
		source: "Pulsifer, Take Action; Don't Procrastinate"
	},
	{
		id: 8,
		text: "Never leave that till tomorrow which you can do today.",
		source: "Benjamin Franklin"
	},
	{
		id: 9,
		text: "Procrastination is like a credit card: it's a lot of fun until you get the bill.",
		source: "Christopher Parker"
	},
	{
		id: 10,
		text: "Someday is not a day of the week.",
		source: "Author Unknown"
	},
	{
		id: 11,
		text: "Tomorrow is often the busiest day of the week.",
		source: "Spanish Proverb"
	},
	{
		id: 12,
		text: "I can accept failure, everyone fails at something. But I can't accept not trying.",
		source: "Michael Jordan"
	},
	{
		id: 13,
		text: "There’s a myth that time is money. In fact, time is more precious than money. It’s a nonrenewable resource. Once you’ve spent it, and if you’ve spent it badly, it’s gone forever.",
		source: "Neil A. Fiore"
	},
	{
		id: 14,
		text: "Nothing can stop the man with the right mental attitude from achieving his goal; nothing on earth can help the man with the wrong mental attitude.",
		source: "Thomas Jefferson"
	},
	{
		id: 15,
		text: "There is only one success--to be able to spend your life in your own way.",
		source: "Christopher Morley"
	},
	{
		id: 16,
		text: "Success is the good fortune that comes from aspiration, desperation, perspiration and inspiration.",
		source: "Evan Esar"
	},
	{
		id: 17,
		text: "We are still masters of our fate. We are still captains of our souls.",
		source: "Winston Churchill"
	},
	{
		id: 18,
		text: "Our truest life is when we are in dreams awake.",
		source: "Henry David Thoreau"
	},
	{
		id: 19,
		text: "The best way to make your dreams come true is to wake up.",
		source: "Paul Valery"
	},
	{
		id: 20,
		text: "Life without endeavor is like entering a jewel mine and coming out with empty hands.",
		source: "Japanese Proverb"
	},
	{
		id: 21,
		text: "Happiness does not consist in pastimes and amusements but in virtuous activities.",
		source: "Aristotle"
	},
	{
		id: 22,
		text: "By constant self-discipline and self-control, you can develop greatness of character.",
		source: "Grenville Kleiser"
	},
	{
		id: 23,
		text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
		source: "Vince Lombardi Jr."
	},
	{
		id: 24,
		text: "At the end of the day, let there be no excuses, no explanations, no regrets.",
		source: "Steve Maraboli"
	},
	{
		id: 25,
		text: "Inaction will cause a man to sink into the slough of despond and vanish without a trace.",
		source: "Farley Mowat"
	},
	{
		id: 26,
		text: "True freedom is impossible without a mind made free by discipline.",
		source: "Mortimer J. Adler"
	},
	{
		id: 27,
		text: "The most powerful control we can ever attain, is to be in control of ourselves.",
		source: "Chris Page"
	},
	{
		id: 28,
		text: "Idleness is only the refuge of weak minds, and the holiday of fools.",
		source: "Philip Dormer Stanhope"
	},
	{
		id: 29,
		text: "This is your life and it's ending one minute at a time.",
		source: "Tyler Durden, Fight Club"
	},
	{
		id: 30,
		text: "You create opportunities by performing, not complaining.",
		source: "Muriel Siebert"
	},
];
  const randQuote = quotes[Math.floor(Math.random() * (quotes.length))];
  $("#text").html(randQuote.text);
  $("#author").html(randQuote.source);
  $("#tweet-quote").attr("href", tweet('"' + randQuote.text + '" - ' + randQuote.source));
}


function tweet(str) {
  
  let stringToConvert = str.split(" ").join("%20").split("@").join("%40").split("!").join("%21");

  let resultString = "https://twitter.com/intent/tweet?text=" + stringToConvert;

  return resultString;
}