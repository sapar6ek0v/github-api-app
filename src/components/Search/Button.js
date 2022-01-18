import React from 'react';

const Button = ({onKeyDown, className, onClick}) => {
    return (
        <button
            onKeyDown={onKeyDown}
            className={`${className}`}
            onClick={onClick}
        >
            search
        </button>
    );
};

export default Button;