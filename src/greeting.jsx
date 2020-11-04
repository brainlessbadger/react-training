import React from 'react';

export const Greeting = ({who}) => {
    return <h1 className='greeting'>
        <span className='center'>Hello, {who}!</span>
    </h1>
}