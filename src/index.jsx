import React, { useState } from 'react';
import { render } from 'react-dom';
import './styles.css';
import { Counter } from './counter';

const Main = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    const reset = () => {
        setCount1(0);
        setCount2(0);
        setCount3(0);
    }

    return <div>
        <Counter count={count1} onChange={setCount1} />
        <Counter count={count2} onChange={setCount2}  />
        <Counter count={count3} onChange={setCount3}  />
        <button 
            type="button" 
            className="button" 
            onClick={reset}
        >
            RESET
        </button>
    </div>
}

render(<Main />, document.querySelector('#root'));