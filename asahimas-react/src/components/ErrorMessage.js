import React from 'react';

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-page">
            <h1>{message || 'Oops! Something went wrong.'}</h1>
        </div>
    );
};

export default ErrorMessage;
