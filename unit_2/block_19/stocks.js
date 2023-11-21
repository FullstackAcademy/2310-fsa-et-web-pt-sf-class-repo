const stockContainer = document.querySelector('#stock_container');

const stocks = [
    {
        name: 'GME',
        price: 420,
    },
    {
        name: 'AMZ',
        price: 20,
    },
    {
        name: 'MSFT',
        price: 111,
    },
];

function createStock(stock) {
    const stockTicker = document.createElement('div');
    stockTicker.classList.add('stock_ticker');

    const tickerName = document.createElement('span');
    tickerName.textContent = stock.name;
    const tickerSplitter = document.createElement('span');
    tickerSplitter.textContent = '|';
    const tickerPrice = document.createElement('price');
    tickerPrice.textContent = stock.price;

    stockTicker.append(tickerName, tickerSplitter, tickerPrice);

    setInterval(function() {
        const randomAmount = Math.random() * (stock.price * .05);
        const isGain = Math.random() >= .5;

        if (isGain) {
            stock.price += randomAmount;
            tickerPrice.textContent = stock.price.toFixed(2);
            stockTicker.classList.add('gains');
            stockTicker.classList.remove('losses');
        } else {
            stock.price -= randomAmount;
            tickerPrice.textContent = stock.price.toFixed(2);
            stockTicker.classList.add('losses');
            stockTicker.classList.remove('gains');
        }
    }, 1000);

    return stockTicker;
}

function createAllStocks(allStocks) {
    let tickers = [];

    for (let i = 0; i < allStocks.length; ++i) {
        const currentStock = allStocks[i];

        tickers.push(createStock(currentStock));
    }

    return tickers;
}

// Render Loop
// One function called "render", that will rebuild the entire page.
stockContainer.append(...createAllStocks(stocks));
