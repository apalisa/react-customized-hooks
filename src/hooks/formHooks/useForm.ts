import { useState } from 'react';

const useForm = (initialValues: { [key: string]: any }) => {
    const [values, setValues] = useState(initialValues);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const resetForm = () => setValues(initialValues);

    return { values, handleChange, resetForm };
};

export default useForm;
