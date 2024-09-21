import { MdDeleteForever, MdEdit } from 'react-icons/md';
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

  // Função para atualizar o registro (exemplo: atualizando o campo "note")
  const handleUpdateClick = async () => {
    // Define o novo valor de updatedRecord, aqui você pode customizar o conteúdo
    const updatedRecord = {
      date: new Date().toISOString()    // Atualiza a data também, se necessário
    };

    try {
      const response = await api.put(`/moodRecord/${id}`, updatedRecord);
      handleUpdateNote(id, response.data.body); // Chama a função para atualizar o estado no App
    } catch (error) {
      console.error('Error updating note:', error);
    }
  };

  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small>{new Date(date).toLocaleDateString()}</small>

        {/* Ícone de atualização */}
        <MdEdit
          onClick={handleUpdateClick} // Chama a função de atualizar
          className='edit-icon'
          size='1.3em'
        />

        {/* Ícone de deletar */}
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

/*import { MdDeleteForever } from 'react-icons/md';
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
*/
