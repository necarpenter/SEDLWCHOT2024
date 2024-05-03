import { LightningElement, api } from 'lwc';

import AbstractRecordPicker from 'c/abstractRecordPicker';
export default class TableRecordPicker extends AbstractRecordPicker {

    @api columns;
    data = [{"label":"nate test","Id":"0035c00002wnoHeAAI","Name":"nate test","Email":"test@email.com"}];

    get fullColumns(){
        
        let tempColumns = [
            {
                type:"button",
                fixedWidth: 150,
                typeAttributes: {
                    label: 'Select',
                    name: 'select',
                    variant: 'brand'
                }
            }
        ];
        console.log('tempColumns: ' + JSON.stringify(tempColumns));
        return tempColumns.concat(this.columns);

    }
}