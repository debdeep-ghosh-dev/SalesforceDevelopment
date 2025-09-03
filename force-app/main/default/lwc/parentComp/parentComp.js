import { LightningElement } from 'lwc';

export default class ParentComp extends LightningElement {
    handleInputChange(event) {
        this.template.querySelector('c-child-comp').showMessage(event.target.value);
    }
}