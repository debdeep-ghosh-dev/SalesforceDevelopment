import { LightningElement } from 'lwc';

export default class ListDemo extends LightningElement {
    empDetails = [
        { id: 1, Name: 'John Doe', Age: '30', Email: 'john.doe@abc.com' },
        { id: 2, Name: 'Jane Smith', Age: '25', Email: 'jane.smith@abc.com' },
        { id: 3, Name: 'Sam Brown', Age: '28', Email: 'sam.brown@abc.com' }
    ];
}