import React, { useState } from "react"
import { BoilingVerdict } from "./boiling-verdict";

export const TemperatureInput = ({scale}) => {
    const [temperature, setTemperature] = useState('0');

    const handleChange = event => {
        setTemperature(event.target.value);
    }

    return <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input value={temperature} onChange={handleChange} />
        <BoilingVerdict temperature={temperature} />
    </fieldset>
}