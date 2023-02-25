import classes from "./addMoney.module.css"
import React, { useState } from 'react';

function AddMoney() {
        const [inputValue, setInputValue] = useState('');
        const handleInput = (event) => {
            setInputValue(parseInt(event.target.value));
        }
        const [value, setValue] = useState(0);
        const handleClick = () => {
            setValue(parseInt(value)+inputValue);
        }    
    return (
        <div className={classes.layout}>
            <p>Current value: {value}</p>
            <input
                type="number"
                value={inputValue}
                onChange={handleInput}
                placeholder = "Enter number here..."
            />
            <button onClick = {handleClick}>Update Value</button>
        </div>
    )
}

export default AddMoney;