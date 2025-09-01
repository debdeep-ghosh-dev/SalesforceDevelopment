import { LightningElement, track } from 'lwc';

export default class SimpleInterestCalculator extends LightningElement {
    @track curentOutput;
    @track principal;
    @track rate;
    @track time;

    principalChangeHandler(event){
        this.principal = parseInt(event.target.value);
    }
    rateChangeHandler(event){
        this.rate = parseInt(event.target.value);
    }
    timeChangeHandler(event){
        this.time = parseInt(event.target.value);
    }
    calculateSIHandler(){
        let si = (this.principal * this.rate * this.time) / 100;
        let total = si + this.principal;
        this.curentOutput = `Simple Interest is: ${si}. <br/>Total amount is: ${total}`;
    }
}