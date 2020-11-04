import React from 'react';
import { render } from 'react-dom';
import { Greeting } from './greeting';
import './styles.css';

const helloWorld = <div className='main'>
    <Greeting who='World'/>
</div>

render(helloWorld, document.querySelector('#root'));