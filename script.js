//get quotes from api
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
