import React from 'react';
import { render } from 'react-dom';
import './styles.css';

const helloWorld = <div className='main'>
    <h1 className='greeting'>
        Hello, World!
    </h1>
</div>

render(helloWorld, document.querySelector('#root'));