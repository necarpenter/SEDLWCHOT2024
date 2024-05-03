import { LightningElement,api, wire } from 'lwc';
import getOppsforAccount from '@salesforce/apex/SearchOpportunityController.getOppsforAccount';
export default class SearchOpportunities extends LightningElement {
    @api recordId;
    oppRecords;
    fieldsToSearch = ['Name', 'StageName'];

    @wire(getOppsforAccount, {accountId : '$recordId'})
    wiredOpps({ error, data }) {
        if (data) {
            console.log('wiredOpps data: ' +  JSON.stringify(data));
            this.oppRecords = data;
        } else if (error) {
            console.error(error);
        }
    }
}