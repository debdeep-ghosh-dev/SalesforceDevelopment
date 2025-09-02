import { LightningElement, track } from 'lwc';

export default class PropertiesExample extends LightningElement {
    @track reactiveProperty;
    nonReactiveProperty;
    result;

    handleReactive(event) {
        this.reactiveProperty = event.target.value;
    }

    handleNonReactive(event) {
        this.nonReactiveProperty = event.target.value;
        this.result = this.nonReactiveProperty + this.reactiveProperty
    }   

}