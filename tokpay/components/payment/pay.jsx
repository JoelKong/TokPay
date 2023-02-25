import classes from "./pay.module.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Pay({ session }) {
  const [formFields, setFormFields] = useState([{ email: "", amount: 0 }]);
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    setMessage("");
    let total = 0;
    for (let i = 0; i < formFields.length; i++) {
      total += parseInt(formFields[i].amount);
    }
    if (total > session.session.user.currentBalance) {
      setMessage("Current Balance Insufficient");
      setDisabled(false);
      return;
    }
    const sendMoney = await axios.patch("/api/transactmoney", {
      id: session.session.user.id,
      email: formFields,
    });
    session.session.user.currentBalance = sendMoney.data.currentBalance;
    setDisabled(false);
    setMessage(sendMoney.data.message);
    setFormFields([{ email: "", amount: 0 }]);
  };

  const addFields = () => {
    let object = {
      email: "",
      amount: 0,
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (e, index) => {
    e.preventDefault();
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className={classes.pay}>
      <h2 className={classes.header}>Payment</h2>
      <p
        className={classes.balance}
      >{`Current Balance: $${session.session.user.currentBalance}`}</p>
      {message && <p className={classes.message}>{message}</p>}
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index} className={classes.input}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(event) => handleFormChange(event, index)}
                value={form.email}
                className={classes.email}
              />
              <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={(event) => handleFormChange(event, index)}
                defaultValue={0}
                className={classes.amount}
              />
              <button
                onClick={(e) => removeFields(e, index)}
                className={classes.button}
              >
                Remove
              </button>
            </div>
          );
        })}
      </form>
      <br />
      <button onClick={addFields} className={classes.add}>
        Add More..
      </button>
      <button onClick={submit} className={classes.submit} disabled={disabled}>
        {disabled ? <div className={classes.loader}></div> : "Submit"}
      </button>
    </div>
  );
}

export default Pay;
