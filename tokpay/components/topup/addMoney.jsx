import classes from "./addMoney.module.css";
import React, { useState } from "react";
import axios from "axios";

function AddMoney({ session }) {
  const [inputValue, setInputValue] = useState();
  const [disable, setDisabled] = useState(false);
  const [message, setMessage] = useState("");
  const handleInput = (event) => {
    setInputValue(parseInt(event.target.value));
  };
  const [value, setValue] = useState(session.session.user.currentBalance);
  const handleClick = async () => {
    setDisabled(true);
    setMessage("");
    if (inputValue) {
      //console.log("Before",session.session.user.currentBalance)
      const updatedAmount = session.session.user.currentBalance + inputValue;
      const updateBalance = await axios.patch("/api/updatebalance", {
        newBalance: updatedAmount,
        id: session.session.user.id,
      });
      //console.log("After",updateBalance.data.currentBalance)
      setMessage(updateBalance.data.message);
      setInputValue("");
      setDisabled(false);
      setValue(updateBalance.data.currentBalance);
      session.session.user.currentBalance = updateBalance.data.currentBalance;
      //console.log("After setValue",session.session.user.currentBalance);
    } else {
      setMessage("Invalid Fields");
    }
    setDisabled(false);
  };
  return (
    <div className={classes.layout}>
      <h2>Top-up</h2>
      {message && <p className={classes.message}>{message}</p>}
      <p className={classes.value}>Current Balance: ${value}</p>
      <input
        type="number"
        value={inputValue}
        onChange={handleInput}
        placeholder="Enter top up value here..."
        className={classes.input}
      />
      <button
        onClick={handleClick}
        disabled={disable}
        className={classes.button}
      >
        {disable ? <div className={classes.loader}></div> : "Update Value"}
      </button>
    </div>
  );
}

export default AddMoney;
