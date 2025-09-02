import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    empDetails = [
        {empName: 'Debdeep',empAddress: 'Kolkata'},
        {empName: 'John',empAddress: 'New York'},
        {empName: 'Smith',empAddress: 'London'},
        {empName: 'Rahul',empAddress: 'Delhi'},
        {empName: 'Amit',empAddress: 'Mumbai'}
    ];
}