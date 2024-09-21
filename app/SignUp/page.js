"use client";
import { useRef } from "react";
import { useState } from "react";
import { Box, TextField, Button, Typography, Input } from "@mui/material";
import { Label } from "@mui/icons-material";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      alert("Your form has been submitted");
      router.push("/");
    }
  };

  const validateInputs = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!firstName.value || firstName.value.length < 1) {
      setFirstNameError(true);
      setFirstNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setFirstNameError(false);
      setFirstNameErrorMessage("");
    }

    if (!lastName.value || lastName.value.length < 1) {
      setLastNameError(true);
      setLastNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setLastNameError(false);
      setLastNameErrorMessage("");
    }

    return isValid;
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

      <TextField
        required
        id="last-name"
        label="Last-Name"
        variant="outlined"
        inputRef={lastNameRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, emailRef)}
      />

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

      <TextField
        required
        id="password"
        label="password"
        variant="outlined"
        inputRef={passwordRef}
        sx={{ marginBottom: "1rem", width: "100%" }}
        onKeyDown={(e) => handleKeyDown(e, firstNameRef)}
      />

      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </Box>
  );
}
