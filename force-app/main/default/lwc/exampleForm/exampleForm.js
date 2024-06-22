import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class ExampleForm extends NavigationMixin(LightningElement) {

    convertedAmount;

    handleAmountChange(event){
        this.convertedAmount = event.detail.convertedAmount;
    }

    handleSubmit(event){
        event.preventDefault();
        let fields = event.detail.fields;
        fields.Amount = this.convertedAmount;
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: event.detail.id,
                actionName: 'view'
            }
        });
    }
}