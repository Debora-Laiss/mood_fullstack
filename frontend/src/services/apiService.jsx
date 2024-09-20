import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001', 
});

export default api;

/*import axios from "axios";

// Função GET usando axios
export async function getFunction() {
    try {
        const response = await axios.get('http://localhost:3001/moodRecord/');
        return response.data;
    } catch (error) {
        console.error('Error in getFunction:', error);
        throw error;
    }
}

// Função POST usando axios
export async function postFunction() {
    try {
        const response = await axios.post('http://localhost:3001/moodRecord/');
        return response.data;
    } catch (error) {
        console.error('Error in postFunction:', error);
        throw error;
    }
}

// Função GET com axios e configuração personalizada
export async function getRequest() {
    try {
        const response = await axios({
            method: 'GET',
            url: 'http://localhost:3001/moodRecord/id'  // Ajuste a URL se necessário
        });
        return response.data;
    } catch (error) {
        console.error('Error in getRequest:', error);
        throw error;
    }
}

// Função POST com axios e configuração personalizada
export async function postRequest() {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3001/moodRecord/',  // Ajuste a URL se necessário
        });
        return response.data;
    } catch (error) {
        console.error('Error in postRequest:', error);
        throw error;
    }
}

// Função Auth POST usando axios
export async function authFunction() {
    try {
        const response = await axios.post('http://localhost:3001/auth');  // Ajuste a URL para o endpoint correto
        return response.data;
    } catch (error) {
        console.error('Error in authFunction:', error);
        throw error;
    }
}

// Função Auth POST com axios e configuração personalizada
export async function authRequest() {
    try {
        const response = await axios({
            method: 'POST',
            url: 'http://localhost:3001/auth',  // Ajuste a URL para o endpoint correto
        });
        return response.data;
    } catch (error) {
        console.error('Error in authRequest:', error);
        throw error;
    }
}
*/