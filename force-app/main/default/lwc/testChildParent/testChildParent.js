import { LightningElement, track } from 'lwc';

export default class TestChildParent extends LightningElement {
    
    handleChange(event){
        const name = event.target.value;
        const nameEvent = new CustomEvent('namechange',{detail:name});
        this.dispatchEvent(nameEvent);
    }
}