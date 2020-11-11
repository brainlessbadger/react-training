import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import { TemperatureInput } from './temperature-input';

const Main = () => {
    return <div>
        <TemperatureInput scale="celsius" />
        <TemperatureInput scale="fahrenheit" />
    </div>
}

render(<Main />, document.querySelector('#root'));