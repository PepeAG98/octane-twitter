import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';

export default class ApplicationController extends Controller {
	@tracked tweets = [
		{ id: 1, userName:"pepe", description:"hola"},
		{ id: 2, userName:"pepe1", description:"hola2"},
		{ id: 3, userName:"pepe2", description:"hola3"}

	];
}
