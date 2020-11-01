

const URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

const getQuoteData = () => {
    console.time('timer1');
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector('.quote-text').textContent = `${data.quote.quoteText}`;
            document.querySelector('.author').textContent = `~ ${data.quote.quoteAuthor}`;
            console.timeEnd('timer1');
        })
        .catch(err => {
            console.log(err);
        })
};

const btnClose = () => {

    document.querySelector('.btn').addEventListener('click', (e) => {

        document.body.style.opacity = '0';
    })
}

getQuoteData();
btnClose();