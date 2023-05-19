import { model, Schema, Types } from 'mongoose';

export interface INote extends Document {
	title: string;
	description: string;
	user: Types.ObjectId | undefined;
	isImportant: boolean;
	isCompleted: boolean;
	createdAt: Date;
	updatedAt: Date;
}

const notesSchema = new Schema(
	{
		title: {
			type: String,
			trim: true,
			required: true,
		},
		description: {
			type: String,
			trim: true,
			required: true,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		isImportant: {
			type: Boolean,
			default: false,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{
		timestamps: true,
	}
);

const Note = model('Note', notesSchema);
export default Note;
