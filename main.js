

const URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

const getQuoteData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.quote-text').textContent = `${data.quote.quoteText}`;
            document.querySelector('.author').textContent = `~ ${data.quote.quoteAuthor}`;
        })
        .catch(err => {
            console.log(err);
        })
};

const btnClose = () => {

    document.querySelector('.btn').addEventListener('click', (e) => {
        document.querySelector('.btn').classList.add('btn-close');
        
        setTimeout(() => {
            window.close();
        }, 750);
        
    });
}

getQuoteData();
btnClose();