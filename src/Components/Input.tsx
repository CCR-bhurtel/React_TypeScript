import React from 'react';

type InputProps = {
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function Input({ value, handleChange }: InputProps) {
    return <input onChange={handleChange} value={value} type="text" />;
}

export default Input;
