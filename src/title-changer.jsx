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

export const TitleChanger = () => {
    const [titleNumber, setTitleNumber] = useState(0);

    const currentTitle = titles[titleNumber];

    useEffect(() => {
        const oldTitle = document.title;

        document.title = currentTitle;

        return () => {
            document.title = oldTitle;
        }
    });

    const nextTitle = () => {
        setTitleNumber(titleNumber => (titleNumber + 1) % titles.length);
    }

    return <div className='title-changer'>
        <span className='center'>
            {currentTitle}
        </span>
        <div className='button-container'>
            <Button onClick={nextTitle} className=''>
                Next title
            </Button>
        </div>
    </div>
}