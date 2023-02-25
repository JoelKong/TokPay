import classes from "./pay.module.css";
import React, { useState } from "react";
import axios from "axios";

function Pay({ session }) {
  const [formFields, setFormFields] = useState([{ email: "", amount: 0 }]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = async (e) => {
    e.preventDefault();
    let total = 0;
    for (let i = 0; i < formFields.length; i++) {
      total += parseInt(formFields[i].amount);
    }
    if (total > session.session.user.currentBalance) {
      console.log("No money u poor :(");
      return;
    }
    const sendMoney = await axios.patch("/api/transactmoney", {
      id: session.session.user.id,
      email: formFields,
      currentBalance: session.session.user.currentBalance,
    });

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
    <div className="Pay">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={(event) => handleFormChange(event, index)}
                value={form.email}
              />
              <input
                name="amount"
                type="number"
                placeholder="Amount"
                value={form.amount}
                onChange={(event) => handleFormChange(event, index)}
                defaultValue={0}
              />
              <button onClick={(e) => removeFields(e, index)}>Remove</button>
            </div>
          );
        })}
      </form>
      <br />
      <button onClick={addFields}>Add More..</button>
      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Pay;
