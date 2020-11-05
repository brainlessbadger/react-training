import React from 'react';
import { render } from 'react-dom';
import { Measure } from './measure';
import { TitleChanger } from './title-changer';
import './styles.css';

const helloWorld = <div className='main'>
    <Measure />
    <TitleChanger />
</div>

render(helloWorld, document.querySelector('#root'));