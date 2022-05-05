public with sharing class EmployeeRelatedProjectAssignment {
    @AuraEnabled(cacheable=true)
    public static List<project_assignment__c> getProjectAssignments(String keyParm) {
        return [
            SELECT Project__r.Name, 
            Project__r.Project_Start_Date__c, 
            Project__r.Project_End_Date__c,
            employee__r.name,
            Project_Assignment_Start_Date__c,
            Project_Assignment_End_Date__c
            from project_assignment__c
            where employee__c = :keyParm AND
            status__c = 'Active'
            limit 1           
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<project_assignment__c> getCompletedAssignments(String keyParma){
        return[
            SELECT Name, Project__r.Name, Feedback__c
            from project_assignment__c
            where employee__c = :keyParma AND
            status__c = 'Rolled off'
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<project_assignment__c> getDraftAssignments(String keyParma){
        return[
            SELECT id, Employee__r.Name, Project__r.Name,
            Name
            from project_assignment__c
            where employee__c = :keyParma AND
            status__c = 'Draft'
        ];  
    }
}
