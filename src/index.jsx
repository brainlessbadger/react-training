import React from 'react';
import { render } from 'react-dom';
import './styles.css';

render(
    <div className='main'>
        <h1 className='greeting'>
            Hello, World!
        </h1>
    </div>,
    document.querySelector('#root')
)