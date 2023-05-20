import { Schema, model } from 'mongoose';

export interface USersType extends Document {
	name: string;
	email: string;
	password: string;
}

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
		},
	},
	{
		timestamps: true,
	}
);

const User = model('User', userSchema);

export default User;
