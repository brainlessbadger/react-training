import React from 'react';
import { render } from 'react-dom';
import { Measure } from './measure';
import './styles.css';

const helloWorld = <div className='main'>
    <Measure />
</div>

render(helloWorld, document.querySelector('#root'));