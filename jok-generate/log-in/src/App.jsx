import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const user = {
  email: "",
  password: "",
  loggedIn: false,
};

function autoComplete() {
  
  user.email =  "kay123@gmail.com";
  user.password = 1234;
  user.loggedIn = true;
  
  console.log(user)
}

function App() {
  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>

      <p id="actions">
        <button onClick={autoComplete}>Login</button>
      </p>
    </div>
  );
}
console.log("hi")

console.log(user)

export default App
