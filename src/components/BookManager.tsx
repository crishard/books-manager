import React, { useState } from 'react';
import { useBooks } from '../hooks/useBooks';
import { Book } from '../types/Book';
import BookForm from './BookForm';
import BookList from './BookList';
import SearchBar from './SearchBar';

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

const BookManager: React.FC = () => {
  const { books, addBook, updateBook, deleteBook } = useBooks();
  const [searchQuery, setSearchQuery] = useState('');
  const [editingBook, setEditingBook] = useState<Book | null>(null);

  const handleAddBook = (data: Book) => {
    addBook.mutate({ ...data, id: generateId() });
  };

  const handleUpdateBook = (data: Book) => {
    if (editingBook) {
      updateBook.mutate({ ...data, id: editingBook.id }, {
        onSuccess: () => {
          setEditingBook(null); 
        }
      });
    }
  };

  const handleDeleteBook = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      deleteBook.mutate(id);
      if (editingBook?.id === id) {
        setEditingBook(null);
      }
    }
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gerenciador de Livros</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-xl font-semibold mb-4">
            {editingBook ? 'Editar Livro' : 'Adicionar Novo Livro'}
          </h2>
          <BookForm
            onSubmit={editingBook ? handleUpdateBook : handleAddBook}
            initialData={editingBook}
          />
        </div>
        <div className="md:col-span-2">
          <SearchBar onSearch={setSearchQuery} />
          <BookList
            books={filteredBooks}
            onEdit={setEditingBook}
            onDelete={handleDeleteBook}
          />
        </div>
      </div>
    </div>
  );
};

export default BookManager;