import React, { useState } from "react"

export const Counter = ({count, onClick}) => {
    return <button 
        type="button" 
        className="button" 
        onClick={onClick}
    >
        Clicked {count} times!
    </button>
}