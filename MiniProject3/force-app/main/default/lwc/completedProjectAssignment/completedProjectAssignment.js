import { LightningElement, wire, track, api } from 'lwc';
import getCompletedAssignments from '@salesforce/apex/EmployeeRelatedProjectAssignment.getCompletedAssignments';

export default class CompletedProjectAssignment extends LightningElement {
    
    completedRecord;
    @track key;
    @api recordId;
    @track column = [{
        label: 'Project',
        fieldName: 'Project__r.Name',
        type: 'text',
        sortable: true
    }, {
        label: 'Project Assignment',
        fieldName: 'Name'
    }];

    @wire(getCompletedAssignments, {keyParma: '$key'}) projectAssignmentCompleted({error, data}){
        if (data) {
    
             this.completedRecord = data;//.map(data => Object.Assign({"Project__r.Name":data.Project__r.Name}, data));
           // this.data = data;
            this.error = undefined;
            console.log('completed record =',this.completedRecord);
         //   console.log('name=',this.draftRecord[0].Project__r.Name);
    
        }
        if (error){
            this.error = error;
            this.completedRecord = undefined;
        }
    }

    connectedCallback(){
        this.key = this.recordId;
    }

}