import { LightningElement, track } from 'lwc';

export default class EmployeeForm extends LightningElement {
    @track show = true;
    @track name ;
    @track age ;
    @track salary ;
    

    handleNameChange(event) {
        this.name = event.target.value;
    }

    handleAgeChange(event) {
        this.age = event.target.value;
    }

    handleSalaryChange(event) {
        this.salary = event.target.value;
    }

    handleSubmit() {
        this.show = false; // show employee details
    }

    handleBack() {
        this.show = true; // back to input form
        this.name = '';
        this.age = '';
        this.salary = '';
    }
}
