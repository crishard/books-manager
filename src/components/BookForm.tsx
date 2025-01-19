import { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { Book } from '../types/Book';
import { ButtonSubmit } from "./form/ButtonSubmit";
import { InputField } from "./form/InputField";
import { SelectField } from "./form/SelectField";
import { TextAreaField } from "./form/TextAreaField";
interface BookFormProps {
    onSubmit: (data: Book) => void;
    initialData?: Book | null;
}

const BookForm: React.FC<BookFormProps> = ({ onSubmit, initialData }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Book>({
        defaultValues: initialData || {
            title: '',
            author: '',
            status: 'pendente',
            rating: 0,
            review: ''
        },
    });

    useEffect(() => {
        reset(initialData || {
            title: '',
            author: '',
            status: 'pendente',
            rating: 0,
            review: ''
        });
    }, [initialData, reset]);

    const onSubmitForm = (data: Book) => {
        onSubmit(data);
        reset(initialData || {
            title: '',
            author: '',
            status: 'pendente',
            rating: 0,
            review: ''
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
            <InputField
                id="title"
                label="Título"
                register={register}
                required
                error={errors.title?.message} options={[]} />

            <InputField
                id="author"
                label="Autor"
                register={register}
                required
                error={errors.author?.message} options={[]} />

            <SelectField
                id="status"
                label="Status"
                register={register}
                required
                error={errors.status?.message}
                options={[
                    { value: 'lido', label: 'Lido' },
                    { value: 'lendo', label: 'Lendo' },
                    { value: 'pendente', label: 'Pendente' },
                ]}
            />

            <InputField
                id="rating"
                label="Avaliação (1-5)"
                register={register}
                type="number" options={[]} />

            <TextAreaField
                id="review"
                label="Resenha"
                register={register}
            />

            <ButtonSubmit initialData={initialData}/>
        </form>
    );
};

export default BookForm;
