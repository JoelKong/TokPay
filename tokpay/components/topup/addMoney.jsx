import classes from "./addMoney.module.css";
import React, { useState } from "react";
import axios from "axios";

function AddMoney({ session }) {
  const [inputValue, setInputValue] = useState();
  const [disable, setDisabled] = useState(false);
  const handleInput = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const [value, setValue] = useState(session.session.user.currentBalance);
  const handleClick = async () => {
    setDisabled(true);
    if (inputValue) {
      const updatedAmount = session.session.user.currentBalance + inputValue;
      const updateBalance = await axios.patch("/api/updatebalance", {
        newBalance: updatedAmount,
        id: session.session.user.id,
      });
      setInputValue("");
      setDisabled(false);
      setValue(updateBalance.data.currentBalance);
    }
  };
  return (
    <div className={classes.layout}>
      <p>Current value: {value}</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInput}
        placeholder="Enter number here..."
      />
      <button onClick={handleClick} disabled={disable}>
        Update Value
      </button>
    </div>
  );
}

export default AddMoney;
