import classes from "./addMoney.module.css";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

function AddMoney({ session }) {
  const [inputValue, setInputValue] = useState();
  const handleInput = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const [value, setValue] = useState(session.session.user.currentBalance);
  const handleClick = async () => {
    const updatedAmount = session.session.user.currentBalance + inputValue;
    const updateBalance = await axios.patch("/api/updatebalance", {
      newBalance: updatedAmount,
      id: session.session.user.id,
    });
    // setValue(parseInt(value) + inputValue);
    console.log(updateBalance);
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
      <button onClick={handleClick}>Update Value</button>
    </div>
  );
}

export default AddMoney;
