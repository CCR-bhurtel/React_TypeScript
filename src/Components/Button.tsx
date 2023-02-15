import React from 'react';

type ButtonProps = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
function Button({ handleClick }: ButtonProps) {
    return (
        <div>
            <button onClick={(event) => handleClick(event, 1)}>Click me</button>
        </div>
    );
}

export default Button;
