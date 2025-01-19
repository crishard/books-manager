import { UseFormRegister } from 'react-hook-form';
import { Book } from '../../types/Book';

export const SelectField: React.FC<{
    id: keyof Book;
    label: string;
    register: UseFormRegister<Book>;
    options: { value: string; label: string }[];
    required?: boolean;
    error?: string;
  }> = ({ id, label, register, options, required, error }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={id}
        {...register(id, required ? { required: `${label} é obrigatório` } : {})}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1.5"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );