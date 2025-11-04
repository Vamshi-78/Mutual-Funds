import React from "react";
import { Container, Typography, Paper, Grid, Box } from "@mui/material";
import { Security, Timeline, Group, Smartphone } from "@mui/icons-material";

export default function About() {
  const features = [
    {
      icon: <Security fontSize="large" />,
      title: "Secure Platform",
      description:
        "We prioritize the security of your investments and personal data with industry-standard encryption and security measures.",
    },
    {
      icon: <Timeline fontSize="large" />,
      title: "Real-time Analytics",
      description:
        "Access comprehensive market analysis and real-time fund performance data to make informed investment decisions.",
    },
    {
      icon: <Group fontSize="large" />,
      title: "Expert Support",
      description:
        "Get guidance from certified financial advisors and experienced market analysts to optimize your investment strategy.",
    },
    {
      icon: <Smartphone fontSize="large" />,
      title: "Accessible Platform",
      description:
        "Access your investments anytime, anywhere through our user-friendly web and mobile platforms.",
    },
  ];

  return (
    <Box
      sx={{
        background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8e9 100%)",
        minHeight: "100vh",
        py: 8,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
            color: "#004d40",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          <Typography variant="h3" gutterBottom fontWeight={700}>
            About Our Platform
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            Empowering investors with comprehensive mutual fund solutions
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  width: "100%",
                  height: "100%",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255, 255, 255, 0.7)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <Box
                  sx={{
                    color: "primary.main",
                    mb: 2,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#2e7d32" }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: "700px", mx: "auto" }}
          >
            Our mission is to simplify mutual fund investments while providing
            powerful tools, real-time insights, and personalized support for
            better financial decision-making.
          </Typography>
        </Box>
      </Container>

      {/* Optional background overlay */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
}
