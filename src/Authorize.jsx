import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (isSignup) {
      if (!form.fullName || form.fullName.length < 3) {
        alert("Full name must be at least 3 characters long");
        return false;
      }
      if (!form.mobile || !/^\d{10}$/.test(form.mobile)) {
        alert("Please enter a valid 10-digit mobile number");
        return false;
      }
    }
    
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    if (!form.password || form.password.length < 6) {
      alert("Password must be at least 6 characters long");
      return false;
    }

    if (isSignup && form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (isSignup) {
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
      const userExists = existingUsers.some(user => user.email === form.email);
      
      if (userExists) {
        alert("An account with this email already exists");
        return;
      }

      const newUser = {
        ...form,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };

      existingUsers.push(newUser);
      localStorage.setItem("users", JSON.stringify(existingUsers));
      alert("Signup successful! Please sign in now.");
      setIsSignup(false);
      setForm({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: "",
      });
    } else {
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(u => u.email === form.email && u.password === form.password);
      
      if (user) {
        // Clear any existing data first
        localStorage.clear();
        
        // Set the new authentication data
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("currentUser", JSON.stringify({
          id: user.id,
          fullName: user.fullName,
          email: user.email
        }));
        
        // Navigate to home
        window.location.href = "/home";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>

        <form onSubmit={handleSubmit} className="login-form">
          {isSignup && (
            <>
              <TextField
                fullWidth
                label="Full Name"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#3498db',
                    },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Mobile No."
                name="mobile"
                value={form.mobile}
                onChange={handleChange}
                required
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&.Mui-focused fieldset': {
                      borderColor: '#3498db',
                    },
                  },
                }}
              />
            </>
          )}

          <TextField
            fullWidth
            label="Email ID"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#3498db',
                },
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: '#3498db',
                },
              },
            }}
          />

          {isSignup && (
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              required
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused fieldset': {
                    borderColor: '#3498db',
                  },
                },
              }}
            />
          )}

          <Button 
            fullWidth 
            variant="contained"
            type="submit"
            className="login-button"
            sx={{
              backgroundColor: '#3498db',
              '&:hover': {
                backgroundColor: '#2980b9',
              },
            }}
          >
            {isSignup ? "Create Account" : "Sign In"}
          </Button>
        </form>

        <div className="login-footer">
          <Typography variant="body2">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <Button 
              onClick={() => setIsSignup(!isSignup)}
              sx={{
                color: '#3498db',
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              {isSignup ? "Sign In" : "Sign Up"}
            </Button>
          </Typography>
        </div>
      </div>
    </div>
  );
}