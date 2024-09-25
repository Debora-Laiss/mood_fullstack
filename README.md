# MoodRecord Fullstack

Bem-vindo ao **MoodRecord API**! 🌟 

Esta API foi desenvolvida para monitorar e gerenciar o estado emocional dos usuários de forma prática e acessível.
Utilize esta API para criar, ler, atualizar e excluir registros de humor, promovendo um melhor acompanhamento da saúde mental.


## 📁 Arquivos do FRONTEND


- ### [src/assets/](https://github.com/Debora-Laiss/mood_fullstack/tree/main/frontend/src/assets)
  
  - `apresentacao.png`: Imagem de apresentação do projeto.
  - `gif.gif`: GIF utilizado em alguma parte visual.
  - `image1.png`: Outra imagem usada no projeto.


- ### [src/components/](https://github.com/Debora-Laiss/mood_fullstack/tree/main/frontend/src/components)
  
  - `About.jsx`: Componente responsável pela página "Sobre" no site.
  - `AddNote.jsx`: Componente para adicionar novos registros de humor.
  - `Footer.jsx`: Componente do rodapé da aplicação.
  - `Header.jsx`: Componente do cabeçalho da aplicação.
  - `Home.jsx`: Página principal do site.
  - `Note.jsx`: Componente individual que exibe cada registro de humor.
  - `NotesList.jsx`: Componente que lista todos os registros de humor.
  - `Search.jsx`: Componente responsável pela barra de pesquisa.

- ### [src/services/](https://github.com/Debora-Laiss/mood_fullstack/tree/main/frontend/src/services)
  
  - `apiService.jsx`: Arquivo que contém as configurações e chamadas para a API.


- **`App.css`**: Estilização global da aplicação.
- **`App.jsx`**: Arquivo principal do Frontend que une os componentes e configura a lógica.
- **`main.jsx`**: Ponto de entrada do React que renderiza a aplicação.

---

## 📁 Arquivos da API

### [app.js](https://github.com/Debora-Laiss/Projeto_M4/blob/debora/backend/src/index.js)

Este é o ponto de entrada principal da aplicação. Ele configura o servidor e conecta ao banco de dados.

### [models/mood.js](https://github.com/Debora-Laiss/Projeto_M4/blob/debora/backend/src/models/mood.js)

Define o modelo para o esquema de humor no MongoDB.

### [routes/moods.js](https://github.com/Debora-Laiss/Projeto_M4/blob/debora/backend/src/routes/moods.js)

Configura as rotas para os endpoints de humor.

### [controllers/moodController.js](https://github.com/Debora-Laiss/Projeto_M4/blob/debora/backend/src/controllers/moodController.js)

Contém a lógica dos controladores para lidar com as requisições.

## 🚀 Funcionalidades

### **Frontend**

- **Página Inicial**: Apresenta uma visão geral dos registros de humor do usuário.
- **Sobre**: Fala sobre o projeto de uma maneira geral
- **Adicionar Novo Registro**: Formulário para o usuário adicionar um novo registro de humor, incluindo notas detalhadas, emojis, ou anexos.
- **Pesquisar Registros**: Barra de pesquisa para buscar registros de humor específicos pelo conteúdo.
- **Atualizar Registro**: Interface que permite o usuário editar registros de humor já existentes.
- **Excluir Registro**: Opção de deletar registros indesejados diretamente da lista.
- **Modo Escuro/Claro**: Alterna o modo de exibição da página entre o tema claro e o tema escuro.
- **Footer Informativo**: Rodapé com links e informações adicionais, como redes sociais e contatos.


### **Backend**
- **Registro de Humor**: Adicione um novo registro de humor com notas detalhadas.
- **Consulta de Registros**: Recupere todos os registros de humor armazenados.
- **Atualização de Registro**: Modifique registros existentes para refletir mudanças no estado emocional.
- **Exclusão de Registro**: Remova registros de humor quando necessário.

## 🛠 Tecnologias Utilizadas

### **Backend**
- **Node.js**: Ambiente de execução para JavaScript no lado do servidor.
- **Express.js**: Framework para construção de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento dos registros de humor.
- **Mongoose**: Biblioteca para modelagem de dados MongoDB.
- **ES6**: Utilização das funcionalidades modernas do JavaScript.

### **Frontend**
- **React.js**: Biblioteca JavaScript para construir interfaces de usuário.
- **Axios**: Biblioteca para fazer requisições HTTP do Frontend para o Backend.
- **CSS3**: Estilos customizados para os componentes do projeto.
- **JavaScript (ES6)**: Linguagem utilizada para a lógica e interação no Frontend.

---

