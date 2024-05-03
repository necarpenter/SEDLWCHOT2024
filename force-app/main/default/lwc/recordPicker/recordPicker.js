import { LightningElement } from 'lwc';
import AbstractRecordPicker from 'c/abstractRecordPicker';
export default class RecordPicker extends AbstractRecordPicker {

    get hasFilteredRecords(){
        return this.filteredRecords && this.filteredRecords.length > 0;
    }
}