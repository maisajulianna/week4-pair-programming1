import { useState } from 'react';
import React from 'react';
import Registration from './Registration';

function Registrations() {
  return (
    <div className="registration">
      <h2>Registration</h2>
      <div className="registration">
        <form action="/submit_registration" method="post">
        <label for="username">username:</label>
        <input type="text" id="username" required/><br />

        <label for="email">email:</label>
        <input type="email" id="email" name="email" required/><br />

        <label for="password">password:</label>
        <input type="password" id="password" name="password" required/><br />

        <label for="confirmPassword">confirm password:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" required/><br />
        <button type="submit">Register</button>
      </form>
    </div>
    </div>
  );
};

export default Registrations;