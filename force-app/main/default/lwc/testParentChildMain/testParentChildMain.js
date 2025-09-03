import {LightningElement} from 'lwc';

export default class testParentChildMain extends LightningElement{
	handleChange(event){
		this.template.querySelector('c-test-parent-child').showMessage(event.target.value);
	}
}