import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
	username: {
		unique: true,
		required: true,
		type: String
	},
	password: {
		unique: true,
		type: String
	},
	role: {
		type: String,
		default: 0
	},
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

mongoose.model('User', userSchema);
