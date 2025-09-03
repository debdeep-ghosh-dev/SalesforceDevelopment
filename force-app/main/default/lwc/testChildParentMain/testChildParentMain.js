import { LightningElement, track} from 'lwc';

export default class TestChildParentMain extends LightningElement {
    @track name;

    handleNameChange(event){
        this.name = event.detail;
    }

}