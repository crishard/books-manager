import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Book } from '../types/Book';

const BOOKS_KEY = 'books';

const getBooks = (): Book[] => {
  const books = localStorage.getItem(BOOKS_KEY);
  return books ? JSON.parse(books) : [];
};

const saveBooks = (books: Book[]) => {
  localStorage.setItem(BOOKS_KEY, JSON.stringify(books));
};

export const useBooks = () => {
  const queryClient = useQueryClient();

  const { data: books = [] } = useQuery({
    queryKey: [BOOKS_KEY],
    queryFn: getBooks,
  });

  const addBook = useMutation({
    mutationFn: (newBook: Book) => {
      return new Promise<Book[]>((resolve) => {
        const updatedBooks = [...books, newBook];
        saveBooks(updatedBooks);
        resolve(updatedBooks);
      });
    },
    onSuccess: (updatedBooks) => {
      queryClient.setQueryData([BOOKS_KEY], updatedBooks);
    },
  });

  const updateBook = useMutation({
    mutationFn: (updatedBook: Book) => {
      return new Promise<Book[]>((resolve) => {
        const updatedBooks = books.map((book) =>
          book.id === updatedBook.id ? { ...book, ...updatedBook } : book
        );
        saveBooks(updatedBooks);
        resolve(updatedBooks);
      });
    },
    onSuccess: (updatedBooks) => {
      queryClient.setQueryData([BOOKS_KEY], updatedBooks);
    },
  });

  const deleteBook = useMutation({
    mutationFn: (id: string) => {
      return new Promise<Book[]>((resolve) => {
        const updatedBooks = books.filter((book) => book.id !== id);
        saveBooks(updatedBooks);
        resolve(updatedBooks);
      });
    },
    onSuccess: (updatedBooks) => {
      queryClient.setQueryData([BOOKS_KEY], updatedBooks);
    },
  });

  return { books, addBook, updateBook, deleteBook };
};

