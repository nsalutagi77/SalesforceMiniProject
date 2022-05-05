import { LightningElement, wire, track, api } from 'lwc';
import getDraftAssignments from '@salesforce/apex/EmployeeRelatedProjectAssignment.getDraftAssignments';



export default class DraftProjectAssignment extends LightningElement {
    
    draftRecord;
    @track key;
    @api recordId;
    @track column = [{
        label: 'Project',
        fieldName: 'Project__r.Id',
        type: 'text',
        sortable: true
    }, {
        label: 'Project Name',
        fieldName: 'Name'
    },
    {
        label: 'Name',
        fieldName: 'Employee__r.Name'
    }];

    @wire(getDraftAssignments, {keyParma: '$key'}) projectAssignmentDraft({error, data}){
        if (data) {
    
             this.draftRecord = data;//.map(data => Object.Assign({"Project__r.Name":data.Project__r.Name}, data));
           // this.data = data;
            this.error = undefined;
            console.log('draftrecord =',this.draftRecord);
            console.log('name=',this.draftRecord[0].Project__r.Name);
    
        }
        if (error){
            this.error = error;
            this.draftRecord = undefined;
        }
    }

    connectedCallback(){
        this.key = this.recordId;
    }

}