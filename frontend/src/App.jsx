import './App.css';
import { useState, useEffect } from 'react';
import api from './services/apiService';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [moodRecord, setMoodRecord] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Buscar registros de humor do backend
    api.get('/moodRecord')
      .then(response => setMoodRecord(response.data.body))
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
      const response = await api.post('/moodRecord', newRecord);
      setMoodRecord([...moodRecord, response.data.body]);
    } catch (error) {
      console.error('Error adding mood record:', error);
    }
  };

  // Função para atualizar um registro específico
  const updateMoodRecord = (id, updatedRecord) => {
    setMoodRecord(moodRecord.map((record) =>
      record._id === id ? updatedRecord : record
    ));
  };

  const deleteMoodRecord = async (id) => {
    console.log('Attempting to delete record with ID:', id); // Verifica o ID
    try {
        await api.delete(`/moodRecord/${id}`);
        setMoodRecord(moodRecord.filter((record) => record._id !== id));
    } catch (error) {
        console.error('Error deleting mood record:', error);
    }
  };

  // Função para alternar o modo escuro
  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <div className='container'>
        {/* Header com o botão de alternância do Dark Mode */}
        <Header handleToggleDarkMode={handleToggleDarkMode} />

        {/* Componente de pesquisa */}
        <Search handleSearchNote={setSearchText} />

        {/* Lista de notas filtrada com base no texto de busca */}
        <NotesList
        	notes={moodRecord.filter((record) =>
				record.note && record.note.toLowerCase().includes(searchText.toLowerCase())
		)}		
          handleAddNote={addMoodRecord}
          handleDeleteNote={deleteMoodRecord}
		  handleUpdateNote={updateMoodRecord}
        />
      </div>
    </div>
  );
};

export default App;
