import React from 'react';
import { Book } from '../types/Book';

interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {books.map((book) => (
        <div key={book.id} className="bg-white shadow rounded-lg p-6 space-y-4">
          <h3 className="text-lg font-semibold">{book.title}</h3>
          <p className="text-gray-600">{book.author}</p>
          <p className="text-sm">
            Status:{' '}
            <span className={`font-semibold ${
              book.status === 'lido' ? 'text-green-600' :
              book.status === 'lendo' ? 'text-blue-600' :
              'text-yellow-600'
            }`}>
              {book.status}
            </span>
          </p>
          {book.rating && (
            <p className="text-sm">
              Avaliação: <span className="font-semibold">{book.rating}/5</span>
            </p>
          )}
          {book.review && (
            <p className="text-sm">
              Resenha: <span className="italic">{book.review}</span>
            </p>
          )}
          <div className="flex justify-end space-x-2">
            <button
              onClick={() => onEdit(book)}
              className="px-3 py-1 text-sm text-indigo-600 hover:bg-indigo-100 rounded"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="px-3 py-1 text-sm text-red-600 hover:bg-red-100 rounded"
            >
              Excluir
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;

