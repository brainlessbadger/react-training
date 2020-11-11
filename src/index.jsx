import React from 'react';
import { render } from 'react-dom';
import './styles.css';
import { Counter } from './counter';

const Main = () => {
    return <div>
        <Counter />
        <Counter />
        <Counter />
    </div>
}

render(<Main />, document.querySelector('#root'));