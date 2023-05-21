import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import Card from '@/components/molicules/Card/Card';
import NotesFrom from '@/components/molicules/NotesFrom/NotesFrom';
import axios from 'axios';

interface Note {
	_id: string;
	title: string;
	description: string;
	createdAt: string;
	isCompleted: boolean;
	isImportant: boolean;
}

const Notes = () => {
	const [noteTitle, setNoteTitle] = useState('');
	const [note, setNote] = useState('');
	const [notes, setNotes] = useState<Note[]>([]);

	//Post Request
	const addNewNote = async () => {
		try {
			const response = await axios.post('/api/notes', {
				title: noteTitle,
				description: note,
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	};
	//Form Submit handler
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		const newNote: Note = {
			_id: Date.now().toString(), // Set the appropriate value for _id
			title: noteTitle,
			description: note,
			createdAt: Date.now().toString(),
			isCompleted: false,
			isImportant: false,
		};
		setNotes((prev) => [...prev, newNote]);
		addNewNote();
		setNote('');
		setNoteTitle('');
	};

	//Fetch All Notes
	const fetchNotes = async () => {
		const response = await axios.get('/api/notes');
		setNotes(response?.data);
		console.log(response?.data);
	};

	useEffect(() => {
		fetchNotes();
	}, []);

	// Update isCompleted (is Note Completed)
	const updateChecked = async (id: string) => {
		//creating a new array with updated isCompleted proparty
		const updatedNotes = notes.map((note) => {
			if (note._id === id) {
				return {
					...note,
					isCompleted: !note.isCompleted,
				};
			}
			return note;
		});

		setNotes(updatedNotes);
		//Find the updated note based on the id
		const findById = updatedNotes.find((note) => note?._id === id);
		//Send request to server to update in the DB
		await axios.put(`/api/notes?id=${id}`, findById);
	};

	//Update isImportant
	const updateToImportant = async (id: string) => {
		//creating a new array with updated isCompleted proparty
		const updatedNotes = notes.map((note) => {
			if (note._id === id) {
				return {
					...note,
					isImportant: !note.isImportant,
				};
			}
			return note;
		});

		setNotes(updatedNotes);
		//Find the updated note based on the id
		const findById = updatedNotes.find((note) => note?._id === id);
		//Send request to server to update in the DB
		await axios.put(`/api/notes?id=${id}`, findById);
	};

	return (
		<Stack gap={8}>
			<Box>
				<NotesFrom handleSubmit={handleSubmit} notesTitle={noteTitle} setNoteTitle={setNoteTitle} note={note} setNote={setNote} />
			</Box>
			<Stack direction='row' flexWrap='wrap' width='100%' gap={4} alignItems='center'>
				{notes &&
					notes?.length &&
					notes.map((note) => (
						<Box width={'22rem'} key={note?._id}>
							<Card updateToImportant={updateToImportant} updateChecked={updateChecked} id={note?._id} title={note?.title} description={note?.description} date={note?.createdAt} isCompleted={note?.isCompleted} isImportant={note?.isImportant} />
						</Box>
					))}
			</Stack>
		</Stack>
	);
};

export default Notes;
