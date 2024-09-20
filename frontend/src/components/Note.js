import { MdDeleteForever } from 'react-icons/md';
import api from '../services/apiService';

const Note = ({ id, text, date, handleDeleteNote }) => {
	const handleDeleteClick = async () => {
		try {
			await api.delete(`/moodRecord/${id}`);
			handleDeleteNote(id);
		} catch (error) {
			console.error('Error deleting note:', error);
		}
	};

	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{new Date(date).toLocaleDateString()}</small>
				<MdDeleteForever
					onClick={handleDeleteClick}
					className='delete-icon'
					size='1.3em'
				/>
			</div>
		</div>
	);
};

export default Note;
