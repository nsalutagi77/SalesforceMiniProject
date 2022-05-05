import {LightningElement, wire, track, api } from 'lwc';
import getProjectAssignments from '@salesforce/apex/EmployeeRelatedProjectAssignment.getProjectAssignments';

export default class CurrentProjectInfo extends LightningElement {

    @track proAssRecord;
    @track key;
    @api recordId;

    @wire(getProjectAssignments, {keyParm :'$key'}) projectAssignment({error, data}){
        if (data) {
            this.proAssRecord = data;
            this.error = undefined;
        }
    }

    connectedCallback(){
        this.key = this.recordId;

    }

}