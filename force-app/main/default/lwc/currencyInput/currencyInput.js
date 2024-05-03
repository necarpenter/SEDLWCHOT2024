import { LightningElement, api } from 'lwc';
import {convertCurrencyFromUSD, convertCurrencyToUSD} from 'c/currencyConversionUtil';
export default class CurrencyInput extends LightningElement {
    @api inputCurrency;
    @api storedCurrency;
    @api label;
    amount;
    convertedAmount;

    handleAmountChange(event){
        console.log('handleAmountChange');
        this.amount = event.target.value;
        this.convertAmount();
        
    }

    convertAmount(){
        console.log('amount: ' + this.amount);
        console.log('inputCurrency: ' + this.inputCurrency);
        console.log('storedCurrency: ' + this.storedCurrency);
        if(this.inputCurrency === 'USD'){
            this.convertedAmount = convertCurrencyFromUSD(this.amount, this.storedCurrency);
        } else if(this.storedCurrency === 'USD'){
            this.convertedAmount = convertCurrencyToUSD(this.amount, this.inputCurrency);
        }
        console.log('Converted Amount: ' + this.convertedAmount);
        this.dispatchEvent(new CustomEvent("currencychange", {detail:{ convertedAmount : this.convertedAmount, amount : this.amount}}));
    }
}