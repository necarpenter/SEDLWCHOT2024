// Rates from USD to other currencies
const rates = {
    'USD': 1,
    'EUR': 0.85,
    'GBP': 0.77,
    'INR': 73.48,
    'AUD': 1.36,
    'CAD': 1.31,
}

function convertFromUSD(amount, toCurrency){
    return amount * rates[toCurrency];
}

function convertToUSD(amount, fromCurrency){
    let inverseRate = 1 / rates[fromCurrency];
    return amount * inverseRate;
}


export { convertFromUSD, convertToUSD };
