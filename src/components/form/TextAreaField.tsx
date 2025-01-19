import { UseFormRegister } from 'react-hook-form';
import { Book } from '../../types/Book';

export const TextAreaField: React.FC<{
    id: keyof Book; // Usa a chave do tipo Book
    label: string;
    register: UseFormRegister<Book>;
  }> = ({ id, label, register }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <textarea
        id={id}
        {...register(id)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-2 px-3"
        rows={3}
      ></textarea>
    </div>
  );