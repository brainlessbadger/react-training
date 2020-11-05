import React, { useState } from 'react';
import { render } from 'react-dom';
import { Measure } from './measure';
import { TitleChanger } from './title-changer';
import './styles.css';

const Main = () => {
    const [titleChangerExists, setTitleChangerExists] = useState(true);

    const removeTitleChanger = () => {
        setTitleChangerExists(false);
    }

    return <div className='main'>
        <Measure />
        {titleChangerExists && <TitleChanger onRemove={removeTitleChanger}/>}
    </div>
}

render(<Main />, document.querySelector('#root'));