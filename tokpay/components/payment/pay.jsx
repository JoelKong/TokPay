import classes from "./pay.module.css"
import React, { useState } from 'react';

function Pay() {
    const [formFields, setFormFields] = useState([
    {email: '', amount: 0},
    ])

    const handleFormChange = (event, index) => {
        let data = [...formFields];
        data[index][event.target.name] = event.target.value;
        setFormFields(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(formFields)
        let total = 0
        for(let i = 0; i < formFields.length; i++) {
            total += parseInt(formFields[i].amount)
        }
        if (total > 10){
            console.log("No money u poor :(")
        }
    }

    const addFields = () => {
        let object = {
          email: '',
          amount: 0
        }

        setFormFields([...formFields, object])
    }

    const removeFields = (index) => {
        let data = [...formFields];
        data.splice(index, 1)
        setFormFields(data)
    }

    return (
        <div className="Pay">
        <form onSubmit={submit}>
            {formFields.map((form, index) => {
             return (
                <div key={index}>
                 <input
                    name='email'
                    type ='email'
                    placeholder='Email'
                    onChange={event => handleFormChange(event, index)}
                    value={form.email}
                />
                <input
                    name ='amount'
                    type = 'number'
                    placeholder='Amount'
                    onChange={event => handleFormChange(event, index)}
                    defaultValue = {0}
                />
                <button onClick={() => removeFields(index)}>Remove</button>
                </div>
            )
            })}
        </form>
        <br/>
            <button onClick={addFields}>Add More..</button>
            <button onClick={submit}>Submit</button>
        </div>
  );
}

export default Pay