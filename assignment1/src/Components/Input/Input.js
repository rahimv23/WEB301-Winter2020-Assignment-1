import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
    const [error, setError] = useState(null);

    const handleBlur = () => {
        const { value, onBlur } = props;
        if (onBlur) {
            onBlur();
        }
        if (value === '') {
            setError('This field is required');
        } else {
            setError(null);
        }
    };

    return (
        <>
            <input
                {...props}
                className={`${props.className} customInput`}
                onBlur={handleBlur}
            />
            <div className="customInputError">{error}</div>
        </>
    );
}

export default Input;