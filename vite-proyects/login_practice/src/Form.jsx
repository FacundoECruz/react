import React, { useRef, useState, useEffect } from "react";
import axios from "axios";

function Form({ onSubmit }) {

  const emailRef = useRef()
  const passwordRef = useRef()
  
  const handleSubmit = (event) => {
    event.preventDefault()

    onSubmit({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    })

    axios({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      data: {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      }
    }).then(res => console.log(res.data))
  }

  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-field">Email</label>
          <input ref={emailRef} type="email" name="email" id="email-field" />
        </div>
        <div>
          <label htmlFor="password-field">Password</label>
          <input ref={passwordRef} type="password" name="password" id="password-field" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;