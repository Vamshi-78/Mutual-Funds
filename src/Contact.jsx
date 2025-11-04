import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Box,
} from "@mui/material";
import { Email, Phone, LocationOn, Support } from "@mui/icons-material";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
  });

  const contactInfo = [
    {
      icon: <Email fontSize="large" />,
      title: "Email",
      details: "support@mutualfund.com",
    },
    {
      icon: <Phone fontSize="large" />,
      title: "Phone",
      details: "+1 (123) 456-7890",
    },
    {
      icon: <LocationOn fontSize="large" />,
      title: "Address",
      details: "123 Investment Street, Financial District, NY 10004",
    },
    {
      icon: <Support fontSize="large" />,
      title: "Support Hours",
      details: "Monday - Friday: 9 AM - 6 PM EST",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus({ submitted: true, success: false });

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setSubmitStatus({ submitted: false, success: true });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
      alert("✅ Message sent successfully! We'll get back to you soon.");
    }, 1000);
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0.8)), url('https://images.unsplash.com/photo-1620694566677-b20d7e7062b1?auto=format&fit=crop&w=1650&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{ color: "#2e7d32", fontWeight: 700 }}
        >
          Contact Us
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="#4caf50"
          sx={{ mb: 6, opacity: 0.9 }}
        >
          We're here to help you make smarter investment decisions
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* Left side: Contact Form */}
          <Grid item xs={12} md={6}>
            <Paper
              elevation={6}
              sx={{
                p: 4,
                borderRadius: 3,
                backdropFilter: "blur(10px)",
                background: "rgba(255,255,255,0.95)",
                boxShadow: "0 8px 25px rgba(46,125,50,0.15)",
                transition: "transform 0.3s ease",
                "&:hover": { transform: "translateY(-6px)" },
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#43a047", fontWeight: 600 }}
              >
                Send us a message
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={submitStatus.submitted}
                      sx={{
                        py: 1.5,
                        fontSize: "1rem",
                        fontWeight: 600,
                        borderRadius: 2,
                        background:
                          "linear-gradient(90deg, #81c784, #a5d6a7, #c8e6c9)",
                        color: "#1b5e20",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, #66bb6a, #81c784, #a5d6a7)",
                        },
                      }}
                    >
                      {submitStatus.submitted ? "Sending..." : "Send Message"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Grid>

          {/* Right side: Contact Info Cards */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={3} justifyContent="center">
              {contactInfo.map((info, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      textAlign: "center",
                      backdropFilter: "blur(8px)",
                      background: "rgba(255,255,255,0.9)",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 10px 25px rgba(46,125,50,0.2)",
                      },
                    }}
                  >
                    <Box sx={{ color: "#43a047", mb: 1 }}>{info.icon}</Box>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: "bold", color: "#388e3c" }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {info.details}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
