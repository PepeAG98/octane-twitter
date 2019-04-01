import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object'

export default class TwitterBoxComponent extends Component {
	@tracked text;

	@action
	handleChange(text) {
		console.log('antes text'+text)
		this.text = text;
		console.log('despues text'+text)
	}
	handleSubmit() {
		let newText = this.text;
		if(this.args.onSubmit){
			this.args.onSubmit(newText);
		}
		else alert('handleSum')
		
	}
}
