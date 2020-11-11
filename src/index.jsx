import React from 'react';
import { render } from 'react-dom';
import { ColorRoot } from './color-context';
import './styles.css';

const Main = () => {
    return <ColorRoot>

    </ColorRoot>
}

render(<Main />, document.querySelector('#root'));