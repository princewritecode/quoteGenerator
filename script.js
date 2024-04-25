//get quotes from api

//** below is the solution done by prince patel */

/*
async function getQuotes()
{
    const apiUrl = 'https://type.fit/api/quotesfdafa';
    try
    {
        const response = await axios.get(apiUrl);
        const value = response.data;
        console.log(value);
        const selectQuote = document.getElementById('quote');
        const author = document.getElementById('author');
        const randomSelection = Math.floor(Math.random() * value.length);
        selectQuote.innerText = value[randomSelection].text;
        author.innerText = value[randomSelection].author;
    }
    catch (error)
    {//catch error here
        console.log(`something went wrong: ${error}`);
    }
}
const btn = document.getElementById('quote-generation');
btn.addEventListener('click', getQuotes);
*/


//** solution from udemy */
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('quote-generation');
const loader = document.getElementById('loader');
let apiQuotes = [];
function loading()
{
    loader.hidden = false;
    quoteContainer.hidden = true;
}
//hide loading
function complete()
{
    quoteContainer.hidden = false;
    loader.hidden = true;
}

//** get quotes from api */

//** show new quotes */

function newQuotes()
{
    loading();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    //** author field is blank replace it with unknown */
    if (!quote.author)
    {
        authorText.textContent = 'unknown';
    } else
    {
        authorText.textContent = quote.author;
    }
    //** check quote length */
    if (quote.text.length > 50)
    {
        quoteText.classList.add('long-quote');

    } else
    {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;

    complete();
}
async function getQuotes()
{
    loading();
    const apiUrl = 'https://type.fit/api/quotes';

    try
    {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuotes();
    }
    catch (error)
    {
        //catch error here
    }
}
//onload

//** tweet quote */
function tweetQuote()
{
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;

    window.open(twitterUrl, '_blank');
}

//** event listener */
newQuoteButton.addEventListener('click', newQuotes);
twitterButton.addEventListener('click', tweetQuote);

getQuotes();