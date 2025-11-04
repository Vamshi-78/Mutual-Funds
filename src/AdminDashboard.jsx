import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  LinearProgress,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItemButton,
} from "@mui/material";
import {
  Dashboard,
  People,
  BarChart,
  AccountBalance,
  Settings,
} from "@mui/icons-material";

export default function AdminDashboard() {
  const stats = [
    { title: "Total Users", value: "2,560", icon: <People /> },
    { title: "Active Investments", value: "1,230", icon: <BarChart /> },
    { title: "Revenue", value: "$48,500", icon: <AccountBalance /> },
    { title: "Pending Approvals", value: "14", icon: <Settings /> },
  ];

  const activities = [
    { name: "John Doe", action: "Added a new fund", time: "5 mins ago" },
    { name: "Emma Watson", action: "Approved transaction", time: "15 mins ago" },
    { name: "Liam Smith", action: "Updated portfolio", time: "30 mins ago" },
    { name: "Sophia Lee", action: "Created new account", time: "1 hr ago" },
  ];

  const progressData = [
    { label: "Growth Fund", progress: 80 },
    { label: "Equity Fund", progress: 65 },
    { label: "Debt Fund", progress: 45 },
    { label: "Hybrid Fund", progress: 70 },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.18), rgba(0,0,0,0.18)), url('https://images.unsplash.com/photo-1626094309830-2a7bb2f6b6dc?auto=format&fit=crop&w=1400&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 4,
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.92)",
          borderRadius: 3,
          boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
          p: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "bold",
            color: "#2e7d32",
            mb: 3,
          }}
        >
          Admin Dashboard 🌿
        </Typography>

        {/* Stats Section */}
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 2.5,
                  textAlign: "center",
                  borderRadius: 2,
                  boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
                  background: "linear-gradient(135deg, #f1fff1, #ffffff)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#43a047",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 1.5,
                  }}
                >
                  {/* render icon component directly inside avatar */}
                  {stat.icon}
                </Avatar>

                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {stat.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Fund Progress Section */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1.5,
              fontWeight: 600,
              color: "#2e7d32",
            }}
          >
            Fund Performance
          </Typography>

          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              background: "rgba(255,255,255,0.98)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            {progressData.map((fund, index) => (
              <Box key={index} sx={{ mb: index < progressData.length - 1 ? 2.5 : 0 }}>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 0.7,
                    fontWeight: 500,
                    color: "#2e7d32",
                  }}
                >
                  {fund.label}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={fund.progress}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#ececec",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #2e7d32, #81c784)",
                    },
                  }}
                />
              </Box>
            ))}
          </Paper>
        </Box>

        {/* Recent Activity */}
        <Box sx={{ mt: 4 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1.5,
              fontWeight: 600,
              color: "#2e7d32",
            }}
          >
            Recent Activities
          </Typography>

          <Paper
            sx={{
              p: 2,
              borderRadius: 2,
              background: "rgba(255,255,255,0.98)",
              boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            }}
          >
            <List disablePadding>
              {activities.map((activity, idx) => (
                <React.Fragment key={idx}>
                  <ListItem disableGutters>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#43a047" }}>
                        {activity.name.charAt(0)}
                      </Avatar>
                    </ListItemAvatar>

                    <ListItemText
                      primary={`${activity.name} — ${activity.action}`}
                      secondary={activity.time}
                    />
                  </ListItem>
                  {idx < activities.length - 1 && <Divider component="li" sx={{ my: 1 }} />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
