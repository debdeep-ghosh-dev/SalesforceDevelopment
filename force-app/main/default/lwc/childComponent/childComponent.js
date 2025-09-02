import { LightningElement , api} from 'lwc';

export default class ChildComponent extends LightningElement {
    @api empDetail = {empName: 'Debdeep',empAddress: 'Kolkata'};
}