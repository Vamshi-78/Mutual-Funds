import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import {
  Shield as AdminIcon,
  TrendingUp as InvestorIcon,
  Book as AdvisorIcon,
  BarChart as AnalystIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const roles = [
  {
    title: "Admin",
    description:
      "Oversee platform management, user activities, and content updates.",
    features: [
      "Platform Management",
      "User Activity Monitoring",
      "Content Updates",
      "System Analytics",
    ],
    icon: <AdminIcon fontSize="large" />,
    buttonText: "Access Admin Dashboard",
  },
  {
    title: "Investor",
    description:
      "Explore mutual funds, compare options, and manage investments.",
    features: [
      "Fund Exploration",
      "Portfolio Management",
      "Investment Tracking",
      "Performance Analysis",
    ],
    icon: <InvestorIcon fontSize="large" />,
    buttonText: "Access Investor Dashboard",
  },
  {
    title: "Financial Advisor",
    description:
      "Provide advice, create educational content, and assist users in selecting funds.",
    features: [
      "Client Management",
      "Educational Content",
      "Recommendation Engine",
      "Advisory Tools",
    ],
    icon: <AdvisorIcon fontSize="large" />,
    buttonText: "Access Financial Advisor Dashboard",
  },
  {
    title: "Data Analyst",
    description:
      "Analyze investment trends, update fund performance data, and generate reports.",
    features: [
      "Trend Analysis",
      "Performance Data",
      "Report Generation",
      "Market Insights",
    ],
    icon: <AnalystIcon fontSize="large" />,
    buttonText: "Access Data Analyst Dashboard",
  },
];

export default function Home() {
  const [selectedRole, setSelectedRole] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setSelectedRole(role);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedRole(null);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom right, #e8f5e9, #e3f2fd)",
        py: 4,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "bold",
            color: "#004d40",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            mb: 2,
          }}
        >
          Mutual Fund Platform
        </Typography>

        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#1b5e20",
            mb: 2,
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
          }}
        >
          Investment perception and selection behavior towards mutual funds
        </Typography>

        <Typography
          variant="body1"
          align="center"
          sx={{
            color: "#33691e",
            mb: 4,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Choose your role to access specialized tools and insights
        </Typography>

        {/* All cards in one row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "nowrap",
            overflowX: "hidden",
          }}
        >
          {roles.map((role) => (
            <Paper
              key={role.title}
              elevation={3}
              sx={{
                flex: "1",
                p: 3,
                textAlign: "center",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                backgroundColor: "#ffffff",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Box sx={{ mb: 1.5, color: "#1e88e5" }}>{role.icon}</Box>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: "#004d40",
                  fontSize: "1rem",
                  fontWeight: "bold",
                }}
              >
                {role.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mb: 1.5,
                  color: "#555",
                  fontSize: "0.9rem",
                  minHeight: "50px",
                }}
              >
                {role.description}
              </Typography>

              <Box textAlign="left" sx={{ mb: 2 }}>
                {role.features.map((feature, idx) => (
                  <Typography
                    variant="body2"
                    key={idx}
                    sx={{ fontSize: "0.85rem", mb: 0.5 }}
                  >
                    • {feature}
                  </Typography>
                ))}
              </Box>

              <Button
                variant="contained"
                size="small"
                sx={{
                  backgroundColor: "#1e88e5",
                  "&:hover": { backgroundColor: "#1565c0" },
                  fontSize: "0.75rem",
                  py: 0.5,
                }}
                onClick={() => handleRoleClick(role)}
              >
                {role.buttonText}
              </Button>
            </Paper>
          ))}
        </Box>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Typography variant="body2" sx={{ color: "#2e7d32" }}>
            Demo Platform – All roles available for exploration
          </Typography>
        </Box>
      </Container>

      {/* Dialog Section */}
      <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        {selectedRole && (
          <>
            <DialogTitle
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "#e3f2fd",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {selectedRole.icon}
                <Typography variant="h6">{selectedRole.title} Dashboard</Typography>
              </Box>
              <Button onClick={handleCloseDialog} sx={{ minWidth: "auto", p: 1 }}>
                <CloseIcon />
              </Button>
            </DialogTitle>

            <DialogContent>
              <Typography variant="h6" gutterBottom>
                Welcome to the {selectedRole.title} Dashboard
              </Typography>
              <Typography variant="body1" paragraph>
                {selectedRole.description}
              </Typography>
              <Typography variant="h6" gutterBottom>
                Available Features:
              </Typography>
              <Box sx={{ pl: 2 }}>
                {selectedRole.features.map((feature, idx) => (
                  <Typography key={idx} variant="body1" sx={{ mb: 1 }}>
                    • {feature}
                  </Typography>
                ))}
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleCloseDialog}>Close</Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#1e88e5",
                  "&:hover": { backgroundColor: "#1565c0" },
                }}
                onClick={() => {
                  if (selectedRole.title === "Admin") navigate("/admin-dashboard");
                  if (selectedRole.title === "Investor") navigate("/investor-dashboard");
                  if (selectedRole.title === "Financial Advisor")
                    navigate("/financial-advisor-dashboard");
                  if (selectedRole.title === "Data Analyst") navigate("/data-analyst-dashboard");
                  handleCloseDialog();
                }}
              >
                Access Dashboard
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
}
