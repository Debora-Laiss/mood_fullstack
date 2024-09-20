import '../App.css'
import { useState, useEffect } from 'react';
import api from './services/apiService';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { useState, useEffect } from 'react';

const App = () => {
	const [moodRecords, setMoodRecords] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		// Buscar registros de humor do backend
		api.get('/mood-records')
			.then(response => setMoodRecords(response.data.body))
			.catch(error => console.error('Error fetching mood records:', error));
	}, []);

	const addMoodRecord = async (mood, stressLevel, anxietyLevel, note) => {
		const date = new Date().toISOString(); // Adiciona a data atual
		const newRecord = {
			date,
			mood,
			stress_level: stressLevel,
			anxiety_level: anxietyLevel,
			note,
		};

		try {
			const response = await api.post('/mood-records', newRecord);
			setMoodRecords([...moodRecords, response.data.body]);
		} catch (error) {
			console.error('Error adding mood record:', error);
		}
	};

	const deleteMoodRecord = async (id) => {
		try {
			await api.delete(`/mood-records/${id}`);
			setMoodRecords(moodRecords.filter((record) => record._id !== id));
		} catch (error) {
			console.error('Error deleting mood record:', error);
		}
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode} />
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={moodRecords.filter((record) =>
						record.note.toLowerCase().includes(searchText.toLowerCase())
					)}
					handleAddNote={addMoodRecord}
					handleDeleteNote={deleteMoodRecord}
				/>
			</div>
		</div>
	);
};

export default App;
