

const URL = 'https://quote-garden.herokuapp.com/api/v2/quotes/random';

const renderError = (msg) => {
    const errorMsg = `Something went wrong☹️ ${msg}. Try again!`;
    document.querySelector('.error').textContent = errorMsg;
    document.querySelector('.quote-text').style.display = 'none';
}

const getQuoteData = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.quote-text').textContent = `${data.quote.quoteText}`;
            document.querySelector('.author').textContent = `~ ${data.quote.quoteAuthor}`;
            document.querySelector('.quote-text').style.opacity = '1';
        })
        .catch(err => {
            console.log(err);
            renderError(err);
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