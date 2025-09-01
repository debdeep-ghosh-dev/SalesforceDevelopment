import { LightningElement } from 'lwc';

export default class IterationOne extends LightningElement {
    contacts = [
        { Id: '1', Name: 'Joe', Title: 'Developer' },
        { Id: '2', Name: 'John', Title: 'Manager' },
        { Id: '3', Name: 'Jane', Title: 'Designer' }
    ];
}