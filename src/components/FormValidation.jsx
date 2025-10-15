import React, { useState } from "react";

function FormValidation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
    if (validateEmail(email) && value.length >= 6) setIsFormValid(true);
    else setIsFormValid(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Form Submitted Successfully!");
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        margin: "60px auto",
        backgroundColor: "#f8fff8",
        padding: "35px 40px",
        border: "2px solid #2ecc71",
        borderRadius: "15px",
        boxShadow: "0px 6px 12px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#2ecc71",
          fontSize: "28px",
          marginBottom: "25px",
          letterSpacing: "1px",
        }}
      >
        Form Validation
      </h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              marginBottom: "8px",
              fontWeight: "600",
              fontSize: "20px",
             
            }}
          >
            Email Address:
          </label>
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={{
              width: "100%",
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2ecc71")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          {emailError && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "6px" }}>
              {emailError}
            </div>
          )}
        </div>

        <div style={{ marginBottom: "25px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
              fontSize: "18px",
              color: "#333",
            }}
          >
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
            style={{
              width: "100%",
              padding: "12px 15px",
              borderRadius: "8px",
              border: "1.5px solid #ccc",
              fontSize: "16px",
              outline: "none",
              transition: "border-color 0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#2ecc71")}
            onBlur={(e) => (e.target.style.borderColor = "#ccc")}
          />
          {password && password.length < 6 && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "6px" }}>
              Password must be at least 6 characters
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFormValid}
          style={{
            width: "100%",
            backgroundColor: isFormValid ? "#2ecc71" : "#95d7b9",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "600",
            padding: "12px",
            borderRadius: "8px",
            cursor: isFormValid ? "pointer" : "not-allowed",
            transition: "background-color 0.3s, transform 0.2s",
          }}
          onMouseEnter={(e) =>
            isFormValid && (e.target.style.backgroundColor = "#27ae60")
          }
          onMouseLeave={(e) =>
            isFormValid && (e.target.style.backgroundColor = "#2ecc71")
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormValidation;
