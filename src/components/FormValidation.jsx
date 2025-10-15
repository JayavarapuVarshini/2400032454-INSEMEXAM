import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
      setEmailError("Invalid email format");
      setIsFormValid(false);
    } else {
      setEmailError("");
      setIsFormValid(password.length >= 6);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (validateEmail(email) && value.length >= 6) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <div style={{ maxWidth: "550px", margin: "auto" }}>
      <h2>Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
          {emailError && (
            <div style={{ color: "red", fontSize: "14px" }}>{emailError}</div>
          )}
        </div>

        <div style={{ marginBottom: "39px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />
          {password && password.length < 6 && (
            <div style={{ color: "red", fontSize: "17px" }}>
              Password must be at least 6 characters
            </div>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
