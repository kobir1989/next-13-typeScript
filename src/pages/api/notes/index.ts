import Note from '../../../../database/model/notes.model';
import connectMongoDb from '../../../../database/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { errorResponse, ErrorResponseType } from '../../../helper/errorResponse';

type Data = {
	title: string;
	description: string;
	isCompleted: boolean;
	isImportant: boolean;
};

const notesHandler = async (req: NextApiRequest, res: NextApiResponse<Data | ErrorResponseType>) => {
	try {
		const { title, description, isCompleted, isImportant } = req.body as Data;
		//Post Request
		if (req.method === 'POST') {
			const newNote = await Note.create({
				title,
				description,
				isCompleted,
				isImportant,
			});
			const responseData: Data = newNote;
			return res.status(201).json(responseData);
		} //Get Request
		else if (req.method === 'GET') {
			const notes = await Note.find();
			const responseData: any = notes;
			return res.status(200).json(responseData);
		}
		// PUT Request
		else if (req.method === 'PUT') {
			const updatedNote = await Note.findByIdAndUpdate({ _id: req.query.id }, { title, description, isCompleted, isImportant }, { runValidators: true, new: true });
			if (!updatedNote) {
				return res.status(400).json(errorResponse('Update failed!'));
			}
			return res.status(201).json(updatedNote);
		} //Delete Note
		else if (req.method === 'DELETE') {
			const deletedNote = await Note.findByIdAndRemove({ _id: req.query.id });
			if (!deletedNote) {
				return res.status(400).json(errorResponse('Delete Failed!'));
			}
			return res.status(200).json(deletedNote);
		}
	} catch (error) {
		return res.status(500).json(errorResponse('Server Error!'));
	}
};

export default connectMongoDb(notesHandler);
