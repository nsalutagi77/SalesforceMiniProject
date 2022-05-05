public with sharing class EmployeeRelatedSkills {
    @AuraEnabled(cacheable=true)
    public static List<Employee_Skill__c> getEmployeeRelatedSkills(String keyParma) {
        return [
            select employee__r.Name,
            Skill_Name__c, Level__c, 
            Relevant_Years_of_Experience__c  
            from employee_skill__c 
            where employee__c = :keyParma
            
        ];

    }
}
