import React, { useState } from "react";

const FormMo = (props) => {
  const [firstname, setFirstname] = useState("");
  const [fnameErr, setFnameErr] = useState("");
  const [lastname, setLastname] = useState("");
  const [lnameErr, setLnameErr] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [confPasswordErr, setConfPasswordErr] = useState("");
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  let errorCount = 0;
  const addUser = (e) => {

    e.preventDefault();
    if (errorCount > 0) {
      return;
    }
    const newUser = { firstname, lastname, email, password };
    console.log("Welcome" + newUser);
    setHasBeenSubmitted(true);
  };

  const fnameValidation = (e) => {
    setFirstname(e.target.value);
    if (e.target.value.length < 3) {
      setFnameErr("First name should be at least 2 characters");
      errorCount += 1;
      setHasBeenSubmitted(false);
    } else {
      setFnameErr("");
    }
  };

  const lnameValidation = (e) => {
    setLastname(e.target.value);
    if (e.target.value.length < 3) {
      setLnameErr("Last name should be at least 2 characters");
    } else {
      setLnameErr("");
    }
  };
  const emailValidation = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 3) {
      setEmailErr("email must be at least 2 characters");
    } else {
      setEmailErr("");
      addUser();
    }
  };
  const passValidation = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 9) {
      setPasswordErr("Password must be 8 characters minimum");
    } else {
      setPasswordErr("");
    }
  };
  const confPassValidation = (e) => {
    setConfPassword(e.target.value);
    if (e.target.value !== password) {
      setConfPasswordErr("Passwords must match!");
    } else {
      setConfPasswordErr("");
    }
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <h3>
          {hasBeenSubmitted ? (
            <p>"Thank you for submitting"</p>
          ) : (<p>Welcome, please submit the form</p>)}
        </h3>
        <div>
          <p>{fnameErr}</p>
          <label htmlFor="firstname" className="for">
            First Name:
          </label>
          <input
            type="text"
            name="firstname"
            onChange={fnameValidation}
            value={firstname}
          />
        </div>
        <div>
          <p>{lnameErr}</p>
          <label htmlFor="lastname" className="for">
            Last Name:
          </label>
          <input
            type="text"
            name="lastname"
            onChange={lnameValidation}
            value={lastname}
          />
        </div>
        <div>
          <p>{emailErr}</p>
          <label htmlFor="email" className="for">
            Email:
          </label>
          <input
            type="email"
            name="email"
            onChange={emailValidation}
            value={email}
          />
        </div>
        <div>
          <p>{passwordErr}</p>
          <label htmlFor="password" className="for">
            Password:
          </label>
          <input
            type="password"
            name="password"
            onChange={passValidation}
            value={password}
          />
        </div>
        <div>
          <p>{confPasswordErr}</p>
          <label htmlFor="confPass" className="for">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confPass"
            onChange={confPassValidation}
            value={confPassword}
          />
        </div>
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default FormMo;
