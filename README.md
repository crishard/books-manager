# Gerenciador de Livros

## Descrição

O **Gerenciador de Livros** é uma aplicação web simples desenvolvida com React para organizar e gerenciar seus livros. Ele permite adicionar, editar, excluir e buscar livros por nome, armazenando os dados localmente no navegador usando LocalStorage.

## Funcionalidades

- **Adicionar Livros**: Cadastre livros com título, autor, status, avaliação e resenha.
- **Editar Livros**: Atualize as informações de um livro existente.
- **Excluir Livros**: Remova livros da lista.
- **Buscar Livros**: Pesquise livros pelo nome de forma rápida e eficiente.
- **Armazenamento Local**: Os dados dos livros são salvos no LocalStorage, garantindo que as informações sejam preservadas mesmo após fechar o navegador.

## Estrutura de Dados

A aplicação utiliza a seguinte estrutura para os livros:

```typescript
export type BookStatus = 'lido' | 'lendo' | 'pendente';

export interface Book {
  id: string;         // Identificador único do livro
  title: string;      // Título do livro
  author: string;     // Autor do livro
  status: BookStatus; // Status do livro ('lido', 'lendo' ou 'pendente')
  rating?: number;    // Avaliação opcional (1 a 5)
  review?: string;    // Resenha opcional
}
```

## Tecnologias Utilizadas

- **React**: Biblioteca para construção da interface do usuário.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao projeto.
- **LocalStorage**: Armazenamento local no navegador para persistência de dados.
- **Tailwind CSS**: Framework CSS para estilização.

## Como Executar o Projeto

1.**Clone o Repositório**:

 ```bash
   git clone https://github.com/crishard/books-manager
   ```

2.**Instale as Dependências**:

   ```bash
   npm install
   ```

3.**Inicie o Servidor de Desenvolvimento**:

   ```bash
   npm start
   ```

4.Acesse a aplicação no navegador em: `http://localhost:5173`

## Uso

1. Adicione um novo livro preenchendo o formulário com título, autor e status. Campos opcionais incluem avaliação e resenha.
2. Edite um livro clicando no botão de edição ao lado de cada item na lista.
3. Exclua um livro clicando no botão de exclusão.
4. Utilize a barra de busca para filtrar livros pelo título.

## Estrutura do Código

- **Components**: Contém componentes reutilizáveis, como o formulário de livros e a lista de livros.
- **Hooks**: Gerencia a lógica de estado e interações com o LocalStorage.
- **Utils**: Funções auxiliares para manipulação de dados.

## Melhorias Futuras

- Adicionar paginação para listas maiores.
- Implementar um tema escuro.
- Sincronizar dados com uma API externa para acesso remoto.
- Adicionar testes unitários e e2e.

## Contribuição

Contribuições são bem-vindas! Siga os passos abaixo para colaborar:

1. Faça um fork do repositório.

2. Crie uma branch para suas alterações:

   ```bash
   git checkout -b feature/nova-funcionalidade
   ```

3. Faça o commit das alterações:

   ```bash
   git commit -m "Adiciona nova funcionalidade"
   ```

4. Envie para o repositório remoto:

   ```bash
   git push origin feature/nova-funcionalidade
   ```

5. Abra um Pull Request.
