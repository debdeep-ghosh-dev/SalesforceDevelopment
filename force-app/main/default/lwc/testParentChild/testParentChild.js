import {LightningElement, api, track} from 'lwc';

export default class testParentChild extends LightningElement{
	
	@track message //track is optional now

	@api
	showMessage(value){
		this.message = value;
	}
}