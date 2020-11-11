import React from 'react';

export const BoilingVerdict = ({temperature}) => {
    if (parseInt(temperature) >= 100) {
        return <p className="boil">The water would boil.</p>;
    }

    return <p className="not-boil">The water would not boil.</p>;
}
