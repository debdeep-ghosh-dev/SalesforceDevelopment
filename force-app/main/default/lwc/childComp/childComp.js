import { LightningElement, track, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @track message;

    @api showMessage(msg) {
        this.message = msg.toUpperCase();
    }
}