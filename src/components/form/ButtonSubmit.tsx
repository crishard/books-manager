import { Book } from "../../types/Book";

interface IButtonSubmitProps {
    initialData: Book | null | undefined;
}
export const ButtonSubmit = (props: IButtonSubmitProps) => {
    return (
        <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
            {props.initialData ? 'Atualizar Livro' : 'Adicionar Livro'}
        </button>
    )
}
