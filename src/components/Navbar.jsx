import React, { useState } from "react";
import "../css/Navbar.css";
import CartIcon from "./CartIcon";
import UserIcon from "./UserIcon";

function Navbar() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleLogin = () => {
    try {
      // Validate username, email, and password
      if (!username || !email || !password) {
        throw new Error("Username, email, and password are required.");
      }
      if (username.length < 6 || password.length < 6) {
        throw new Error(
          "Username and password must be at least 6 characters long."
        );
      }
      if (!validateEmail(email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Perform login logic here (e.g., send request to backend)

      // Reset form fields and errors
      setUsername("");
      setEmail("");
      setPassword("");
      setError("");
      setShowLoginForm(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const validateEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  const closeLoginForm = () => {
    setShowLoginForm(false);
  };

  return (
    <header className="header bg-red-900 m-[0px] flex items-center justify-between rounded-none py-4 px-4 w-full    ">
      {/* Logo */}
      {/* Logo */}
      <span className="logo">
        <span>A</span>
        <span>m</span>
        <span>a</span>
        <span>k</span>
        <span>a</span>
        <span>'</span>
        <span>s</span>
        <span>&nbsp;</span>
        <span>B</span>
        <span>a</span>
        <span>k</span>
        <span>e</span>
        <span>r</span>
        <span>y</span>
      </span>

      {/* Navigation */}
      <nav>
        <ul className="nav-list">
          <li>
            {/* Smooth scroll to "Home" section */}
            <a
              href="#hero-video-container"
              onClick={(e) => e.preventDefault()}
              onMouseDown={() =>
                document
                  .getElementById("hero-video-container")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Home
            </a>
          </li>
          <li>
            {/* Smooth scroll to "About" section */}
            <a
              href="#about"
              onClick={(e) => e.preventDefault()}
              onMouseDown={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              About
            </a>
          </li>
          <li>
            {/* Smooth scroll to "Recipes" section */}
            <a
              href="#recipeslist"
              onClick={(e) => e.preventDefault()}
              onMouseDown={() =>
                document
                  .getElementById("recipeslist")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Recipes
            </a>
          </li>
          <li>
            {/* Smooth scroll to "Contact" section */}
            <a
              href="#contact"
              onClick={(e) => e.preventDefault()}
              onMouseDown={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Contact
            </a>
          </li>
          <li>
            <CartIcon className="icon" />
            {/* Button to toggle login form */}
            <button onClick={toggleLoginForm}>
              <UserIcon className="icon" />
            </button>
          </li>
        </ul>
      </nav>
      {/* Login Form */}
      {/* Use a conditional class to toggle the display of the form */}
      <div className={`form-overlay ${showLoginForm ? "show" : ""}`}>
        <button className="close-button" onClick={closeLoginForm}>
          X
        </button>
        <div className="form-box">
          <form>
            {/* Username input */}
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {/* Email input */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {/* Password input */}
            <input
              type="email"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Login button */}
            <button onClick={handleLogin}>Login</button>
          </form>
          {/* Error message */}
          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
