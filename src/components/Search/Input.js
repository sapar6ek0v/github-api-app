import React from 'react';

const Input = ({value, className, func, width, height}) => {
    return (
        <input
            value={value}
            onChange={func}
            className={`${className}`}
            type="text"
            style={{
                width: width,
                height: height
            }}
        />
    );
};

export default Input;