import { LightningElement,api, wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';

export default class AbstractRecordPicker extends LightningElement {
    @api records = [];
    @api labelField = 'Name';
    @api filterableFields = [];
    showFiltered = false;
    searchValue;
    //options = [];
    get options(){
        if(this.records && Array.isArray(this.records) ){
            return this.records.map((record) => {
                return { label: record[this.labelField], ...record };
            });
        }
    }

    get filteredRecords(){
        if(this.searchValue){
            if(this.options && Array.isArray(this.options) ){
                console.log('filteredRecords: ' + JSON.stringify(this.options.filter(option => option.label.toLowerCase().includes(this.searchValue.toLowerCase()))));
                return this.options.filter(option => option.label.toLowerCase().includes(this.searchValue.toLowerCase()));
            }
        }

    }

    filterOption(option){
        let searchValueLower = this.searchValue.toLowerCase();

        for(let field of filterableFields){
            if(option[field].includes(searchValueLower)){
                return true;
            }
        }

        return false;
    }

	allowBlur() {
		this._cancelBlur = false;
	}

	cancelBlur() {
		this._cancelBlur = true;
	}

    handleSearch(event){
        this.showFiltered = true;
        if(event.target?.value){
            this.searchValue = event.target.value;
        }
    }

    handleSelect(event){
        let selectedRecordId;
        if(event.target?.dataset.id && event.target?.dataset?.id){
            selectedRecordId = event.target.dataset.id;
        }else if(event.detail?.row){
            selectedRecordId = event.detail.row.Id;
        }
        console.log('handleSelect: ' + JSON.stringify(selectedRecordId));
        const selectedEvent = new CustomEvent('recordpick', { detail: selectedRecordId });
        this.dispatchEvent(selectedEvent);
        this.searchValue = '';

    }
}