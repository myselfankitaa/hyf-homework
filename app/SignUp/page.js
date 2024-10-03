"use client";
import { useRef } from "react";
import { useState } from "react";
import { Box, TextField, Button, Typography, Input } from "@mui/material";
import { Label } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [formErrors, setFormErrors] = useState({
    emailError: "",
    passwordError: "",
    firstNameError: "",
    lastNameError: "",
  });

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleKeyDown = (event, nextFieldRef) => {
    if (event.key === "Enter") {
      event.preventDefault();
      nextFieldRef.current?.focus();
    }
  };

  const validateInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    let emailError = "";
    let passwordError = "";
    let firstNameError = "";
    let lastNameError = "";

    let isValid = true;

    if (!/\S+@\S+\.\S+/.test(email)) {
      emailError = "Please enter a valid email address.";
      isValid = false;
    }

    if (password.length < 6) {
      passwordError = "Password must be at least 6 characters long.";
      isValid = false;
    }

    if (firstName.trim() === "") {
      firstNameError = "Name is required.";
      isValid = false;
    }

    if (lastName.trim() === "") {
      lastNameError = "Name is required.";
      isValid = false;
    }
    setFormErrors({
      emailError,
      passwordError,
      firstNameError,
      lastNameError,
    });
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      alert("Your form has been submitted");
      router.push("/");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto",
        padding: "2rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>

      <TextField
        required
        id="first-name"
        label="First-Name"
        variant="outlined"
        inputRef={firstNameRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, lastNameRef)}
      />
      {formErrors.firstNameError && <p>{formErrors.firstNameError}</p>}

      <TextField
        required
        id="last-name"
        label="Last-Name"
        variant="outlined"
        inputRef={lastNameRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, emailRef)}
      />

      {formErrors.lastNameError && <p>{formErrors.lastNameError}</p>}

      <TextField
        required
        id="email"
        label="email"
        type="email"
        variant="outlined"
        inputRef={emailRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, passwordRef)}
      />

      {formErrors.emailError && <p>{formErrors.emailError}</p>}

      <TextField
        required
        id="password"
        label="password"
        variant="outlined"
        inputRef={passwordRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, firstNameRef)}
      />

      {formErrors.passwordError && <p>{formErrors.passwordError}</p>}

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
