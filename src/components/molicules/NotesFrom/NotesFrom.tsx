import React from 'react';
import { Box } from '@mui/material';
import Button from '@/components/Atoms/Button/Button';
import { styled } from '@mui/material/styles';

const Input = styled('input')(({ theme }) => ({
	border: `1px solid rgba(29, 29, 29, 0.2)`,
	borderRadius: '8px',
	padding: '1.5rem',
	width: '100%',
}));
const Form = styled('form')({
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	background: '#FFF',
	padding: '1.5rem',
	borderRadius: '8px',
});

type NotesForm = {
	setNote: (value: string) => void;
	handleSubmit: (e: { preventDefault: () => void }) => void;
	notesTitle: string;
	note: string;
	setNoteTitle: (value: string) => void;
};

const NotesFrom = ({ setNote, handleSubmit, notesTitle, note, setNoteTitle }: NotesForm) => {
	return (
		<Form onSubmit={handleSubmit}>
			<Input
				placeholder='Note Title'
				value={notesTitle}
				required
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setNoteTitle(e.target.value);
				}}
			/>
			<Input
				placeholder='Add a New Note'
				value={note}
				required
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setNote(e.target.value);
				}}
			/>
			<Box>
				<Button type='submit' variant='contained' size='large'>
					Add Note
				</Button>
			</Box>
		</Form>
	);
};

export default NotesFrom;
