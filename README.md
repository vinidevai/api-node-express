# API REST de Livraria

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white)

Esse projeto consiste em uma API REST para o gerenciamento de uma livraria, desenvolvida como parte do curso de **APIs com Node.js com Express e MongoDB da Alura**. A API permite realizar operações de CRUD (Create, Read, Update, Delete) em livros e autores.

---

## Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para Node.js, utilizado para o roteamento e gerenciamento de requisições.
* **MongoDB**: Banco de dados NoSQL para o armazenamento dos dados.
* **Mongoose**: Biblioteca para modelagem de objetos MongoDB, simplificando as interações com o banco de dados.

---

## Funcionalidades da API

A API oferece os seguintes endpoints para interação:

### Livros
* `GET /livros`: Lista todos os livros cadastrados.
* `GET /livros/busca`: Filtra livros por `query parameters` como título, editora, autor, e faixas de preço e páginas.
* `GET /livros/:id`: Retorna um livro específico pelo seu ID.
* `POST /livros`: Adiciona um novo livro ao catálogo.
* `PUT /livros/:id`: Atualiza as informações de um livro existente.
* `DELETE /livros/:id`: Remove um livro do catálogo.


### Autores
* `GET /autores`: Lista todos os autores cadastrados.
* `GET /autores/:id`: Retorna um autor específico pelo seu ID.
* `POST /autores`: Adiciona um novo autor.
* `PUT /autores/:id`: Atualiza as informações de um autor existente.
* `DELETE /autores/:id`: Remove um autor.

---

## O que eu aprendi com o projeto

Esse projeto me ajudou muito no entendimento e desenvolvimento de APIs REST. Vou listar aqui o que pra mim foram os topicos principais desse projeto:

* **Arquitetura RESTful**: Compreensão dos princípios de roteamento, métodos HTTP (GET, POST, PUT, DELETE) e a estrutura de URLs para criação de endpoints para cada metodo.
* **Manejo de Erros**: Implementação de um middleware de tratamento de erros para capturar e responder a erros nativos do Node e erros do Mongoose.
* **Modelagem de Dados**: Utilização do Mongoose pra criar os schemas e modelos para Livros e Autores da livraria, constrindo tambem a logica da relacao entre esses modelos.
* **Consultas Avançadas**: Consultas dinâmicas utilizando `query` para filtragem (por título, autor, etc.), paginação e ordenação de resultados (essa parte foi muito interessante, tomei a liberdade de criar algumas regras do meu agrado).
* **Middleware**: Utilização de middlewares do Express para processar as requisições, tanto na hora de fazer o tratamentode erros como tambem na etapa de paginacao das solicitacoes (tambem uma das partes mais interessantes de configurar).
* **Assincronismo e Promises**: Uso de `async/await` para lidar com operações de banco de dados.

---

<div align="center">
  <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550754.svg" alt="Logo da Alura" width="150px">
  <h3>Projeto API com Node.js da Alura</h3>
</div>



## 👨‍💻 Autor

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/190038668?v=4" width="100" height="100" alt="Vinicius Sousa" style="border-radius: 50%;">
  
  **Vinicius Sousa**  
  *Desenvolvedor & Especialista em Automações*
  
  [![GitHub](https://img.shields.io/badge/GitHub-ViniAdss-black?style=flat-square&logo=github)](https://github.com/ViniAdss)
  [![Email](https://img.shields.io/badge/Email-adsvinisousa@gmail.com-red?style=flat-square&logo=gmail)](mailto:adsvinisousa@gmail.com)
  
  💼 **ViniDevs**
</div>
