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
        <Counter count={count1} onClick={() => setCount1(count => ++count)} />
        <Counter count={count2} onClick={() => setCount2(count => ++count)}  />
        <Counter count={count3} onClick={() => setCount3(count => ++count)}  />
        <button 
            type="button" 
            className="button" 
            onClick={reset}
        >
            RESET (current sum {count1 + count2 + count3})
        </button>
    </div>
}

render(<Main />, document.querySelector('#root'));