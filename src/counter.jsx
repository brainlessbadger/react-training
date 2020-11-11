import React, { useState } from "react"

export const Counter = ({count, onChange}) => {
    const clickHandler = () => {
        onChange(count + 1);
    }

    return <button 
        type="button" 
        className="button" 
        onClick={clickHandler}
    >
        Clicked {count} times!
    </button>
}