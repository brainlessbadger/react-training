import React, { useState } from 'react';
import { fakeApi } from './fakeApi';

const Button = ({ children, ...props }) => {
    return <button type='submit' className='center button' {...props}>
        {children}
    </button>
}

export const Form = () => {
    const [result, setResult] = useState(null);

    const [numberA, setNumberA] = useState('');
    const handleChangeA = event => {
        setNumberA(parseInt(event.target.value));
    }

    const [numberB, setNumberB] = useState('');
    const handleChangeB = event => {
        setNumberB(parseInt(event.target.value));
    }

    const handleSubmit = async event => {
        event.preventDefault();

        const response = await fakeApi.post({
            numberA: numberA,
            numberB, numberB,
            operation: '+'
        });

        setResult(response.result);
    }

    return <form className='title-changer' onSubmit={handleSubmit}>
        <div className="button-container">
            <label>A:</label>
            <input type="number" value={numberA} onChange={handleChangeA} />
        </div>        
        <div className="button-container">
            <label>B:</label>
            <input type="number" value={numberB} onChange={handleChangeB} />
        </div>
        <div className="button-container">
            <Button>
                Submit
            </Button>
        </div>
        <div className="button-container">
            <span>Result: </span> <span>{result}</span>
        </div>
    </form>
}