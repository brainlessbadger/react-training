import React from 'react';
import { render } from 'react-dom';
import { Counter } from './counter';
import './styles.css';

const helloWorld = <div className='main'>
    <Counter />
</div>

render(helloWorld, document.querySelector('#root'));