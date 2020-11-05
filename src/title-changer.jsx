import React, { useEffect, useState } from 'react';

const titles = [
    'React',
    'Szkolonko',
    'Zabierzcie mnie stond',
    'Związek Radziecki',
    'Lody vaniliowe',
    'fooBar'
]

export const TitleChanger = () => {
    const [titleNumber, setTitleNumber] = useState(0);

    useEffect(() => {
        const oldTitle = document.title;

        document.title = titles[titleNumber];

        return () => {
            document.title = oldTitle;
        }
    });


    return <div className='title-changer'>
        <span className='center'>
            Width: {width}px
        </span>
        <span className='center'>
            Height: {height}px
        </span>
    </div>
}