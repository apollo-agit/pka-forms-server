mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PkaFormSchema = new Schema({
	title: { type: String, index: true, required: true},
	description: {type: String, required: true},
	formComponents: [{
		sequence: { type: Number, required: true},
		name: { type: String, required: true},
		label: { type: String, required: true},
		type: { type: String, required: true},
		size: { type: Number, required: false},
		texticon: { type: String, required: false},
		width: { type: Number, requied: false},
		height: { type: Number, required: false},
		options: []
		}]
})

module.exports = mongoose.model('PkaForm', PkaFormSchema);	