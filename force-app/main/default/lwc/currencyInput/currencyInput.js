import { LightningElement, api } from 'lwc';
import {convertFromUSD, convertToUSD} from 'c/currencyConversionUtil';
export default class CurrencyInput extends LightningElement {
    @api label;
    @api storedCurrency;
    @api displayCurrency;

    amount;
    convertedAmount;

    handleAmountChange(event){
        this.amount = event.target.value;
        this.doConvert();
    }

    doConvert(){
        if(this.displayCurrency === 'USD'){
            this.convertedAmount = convertFromUSD(this.amount, this.storedCurrency)
        }else{
            this.convertedAmount = convertToUSD(this.amount, this.displayCurrency);
        }

        let ammountChangeEvent  = new CustomEvent('amountchange', {
            detail : {
                amount : this.amount, 
                convertedAmount : this.convertedAmount
            }
        });

        this.dispatchEvent(ammountChangeEvent);
    }
}