import React, { useState } from "react";

const FormMo = (props) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const addUser = (e) => {};
  return (
    <div>
      <form action="" onSubmit={addUser}>
        <div>
          <label htmlFor="firstname" className="for">First Name:</label>
          <input
            type="text"
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname" className="for">Last Name:</label>
          <input
            type="text"
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="for">Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="for">Password:</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confPass" className="for">Confirm Password:</label>
          <input
            type="password"
            name="confPass"
            onChange={(e) => setConfPassword(e.target.value)}
          />
        </div>
        <input type="submit" value="Add User" />
      </form>
      <hr />
      <div>
        <p>First Name:{firstname}</p>
        <p>Last Name:{lastname}</p>
        <p>Email:{email}</p>
        <p>First Name:{password}</p>
        <p>First Name:{confPassword}</p>
      </div>
    </div>
  );
};

export default FormMo;
