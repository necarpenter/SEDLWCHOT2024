import { LightningElement } from 'lwc';
import {convertCurrencyFromUSD, convertCurrencyToUSD} from 'c/currencyConversionUtil';
export default class CurrencyConverter extends LightningElement {
    amount;
    currencyOptions = [{label: 'USD', value: 'USD'}, {label: 'EUR', value: 'EUR'}, {label: 'GBP', value: 'GBP'}, {label: 'INR', value: 'INR'}, {label: 'AUD', value: 'AUD'}, {label: 'CAD', value: 'CAD'}];
    selectedCurrency;
    convertedAmount=0.00;
    handleAmountChange(event){
        this.amount = event.target.value;
    }
    handleCurrencyChange(event){
        this.selectedCurrency = event.target.value;
    }

    handleConvert(){
        console.log('amount: ' + this.amount);
        console.log('selectedCurrency: ' + this.selectedCurrency);
        this.convertedAmount = convertCurrencyFromUSD(this.amount, this.selectedCurrency);

        console.log('Converted Amount: ' + this.convertedAmount);
    }
}