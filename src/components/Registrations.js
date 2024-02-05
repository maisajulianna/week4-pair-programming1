import React from 'react';
import Title from "./Title";

function Registrations() {
  return (
    <div className="registration">
      <Title title="registration"/>
      <div className="registration-box">
        <form action="/submit_registration" method="post">
        <label htmlFor="username">username: </label>
        <input type="text" id="username" required/><br />

        <label htmlFor="email">email: </label>
        <input type="email" id="email" name="email" required/><br />

        <label htmlFor="password">password: </label>
        <input type="password" id="password" name="password" required/><br />

        <label htmlFor="confirmPassword">confirm password: </label>
        <input type="password" id="confirmPassword" name="confirmPassword" required/><br />

        <button type="submit">register</button>
      </form>
    </div>
    </div>
  );
};

export default Registrations;