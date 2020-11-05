import React, { useEffect, useState } from 'react';

export const Measure = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }

        window.addEventListener('resize', handler);

        return () => {
            window.removeEventListener('resize', handler);
        }
    });

    return <div className='measure'>
        <span className='center'>
            Width: {width}px
        </span>
        <span className='center'>
            Heigt: {height}px
        </span>
    </div>
}