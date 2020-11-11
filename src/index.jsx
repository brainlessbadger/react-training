import React, { useState } from 'react';
import { render } from 'react-dom';
import { Form } from './form';
import './styles.css';

const Main = () => {
    return <div className='main'>
        <Form />
    </div>
}

render(<Main />, document.querySelector('#root'));