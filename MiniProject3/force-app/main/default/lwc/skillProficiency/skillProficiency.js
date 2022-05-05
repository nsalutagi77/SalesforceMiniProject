import { LightningElement, wire, track, api } from 'lwc';

import SKILL_NAME from '@salesforce/schema/Employee_Skill__c.Skill_Name__c';
import LEVEL from '@salesforce/schema/Employee_Skill__c.Level__c';
import RELEVANT_EXP from '@salesforce/schema/Employee_Skill__c.Relevant_Years_of_Experience__c';
import getEmployeeRelatedSkills from '@salesforce/apex/EmployeeRelatedSkills.getEmployeeRelatedSkills';
import Level from '@salesforce/schema/DatacloudContact.Level';

const COLUMNS = [
    { label: 'Skill Name', fieldName: SKILL_NAME.fieldApiName, type: 'text' },
    { label: 'Level', fieldName: LEVEL.fieldApiName, type: 'text' },
    { label: 'Relevant Experience', fieldName: RELEVANT_EXP.fieldApiName, type: 'number' }
];

export default class SkillProficiency extends LightningElement {
    
    @track key;
    @api recordId;
    columns = COLUMNS;
    @wire(getEmployeeRelatedSkills, {keyParma: '$key'})
    employeeSkills;

    connectedCallback(){
        this.key = this.recordId;
    }

}