import React, { useEffect, useState } from 'react';

const Button = ({children, onClick}) => {
    return <button type='button' className='button smaller-text' onClick={onClick}>
        {children}
    </button>
}

const titles = [
    'React',
    'Szkolonko',
    'Zabiercie mie stond',
    'Związek Radziecki',
    'Lody vaniliowe',
    'fooBar'
]

export const TitleChanger = ({onRemove}) => {
    const [titleNumber, setTitleNumber] = useState(0);

    const currentTitle = titles[titleNumber];

    useEffect(() => {
        const oldTitle = document.title;
    
        document.title = currentTitle;
    
        return () => {
            document.title = oldTitle;
        }
    }, [currentTitle]);

    const nextTitle = () => {
        setTitleNumber(titleNumber => (titleNumber + 1) % titles.length);
    }

    return <div className='title-changer'>
        <span className='center'>
            {currentTitle}
        </span>
        <div className='button-container'>
            <Button onClick={nextTitle}>
                Next title
            </Button>
            <Button onClick={onRemove}>
                Remove me
            </Button>
        </div>
    </div>
}