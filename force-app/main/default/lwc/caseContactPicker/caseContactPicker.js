import { LightningElement, api, wire } from 'lwc';

import getCaseContacts from '@salesforce/apex/caseContactPickerController.getCaseContacts';
export default class CaseContactPicker extends LightningElement {
    @api recordId;
    contacts;
    fieldsToSearch = ['Name', 'Email'];
    contactColumns = [
        { label: 'Name', fieldName: 'Name', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];
    

    @wire(getCaseContacts, {caseId : '$recordId'})
    wiredCase({ error, data }) {
        if (data) {
            console.log('wiredCase data: ' +  JSON.stringify(data));
            this.contacts = data;
        } else if (error) {
            console.error(error);
        }
    }
}