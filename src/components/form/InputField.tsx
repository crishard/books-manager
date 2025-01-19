import { UseFormRegister } from 'react-hook-form';
import { Book } from '../../types/Book';

export const InputField: React.FC<{
    id: keyof Book;
    label: string;
    register: UseFormRegister<Book>;
    options: { value: string; label: string }[];
    required?: boolean;
    error?: string;
    type?: string;
}> = ({ id, label, register, required, error, type = "text" }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={id}
            {...register(id, required ? { required: `${label} é obrigatório` } : {})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1 px-2"
        />
        {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
);