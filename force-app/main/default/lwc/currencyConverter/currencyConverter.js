import { LightningElement } from 'lwc';
import {convertFromUSD} from 'c/currencyConversionUtil';
export default class CurrencyConverter extends LightningElement {
    currencyOptions = [{label: 'USD', value: 'USD'}, {label: 'EUR', value: 'EUR'}, {label: 'GBP', value: 'GBP'}, {label: 'INR', value: 'INR'}, {label: 'AUD', value: 'AUD'}, {label: 'CAD', value: 'CAD'}];
    amount;
    selectedCurrency;
    convertedAmount;

    handleAmountChange(event){
        this.amount = event.target.value;
    }

    handleCurrencyChange(event){
        this.selectedCurrency = event.target.value;
    }

    handleConvert(){
        this.convertedAmount = convertFromUSD(this.amount, this.selectedCurrency);
    }
}