import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
} from "@mui/material";
import {
  Person,
  People,
  ShowChart,
  Schedule,
  TrendingUp,
  AccountBalance,
} from "@mui/icons-material";

export default function FinancialAdvisorDashboard() {
  const advisor = {
    name: "Priya Sharma",
    title: "Senior Financial Advisor",
    clients: 18,
    totalAssets: "$1.2M",
    performance: "+12.8%",
  };

  const clients = [
    { name: "Arjun Mehta", investment: "$45,000", growth: "+8.5%" },
    { name: "Neha Patel", investment: "$38,500", growth: "+11.2%" },
    { name: "Rahul Gupta", investment: "$52,000", growth: "+9.4%" },
    { name: "Kavya Iyer", investment: "$60,500", growth: "+10.6%" },
  ];

  const meetings = [
    { client: "Arjun Mehta", topic: "Portfolio Review", time: "Tomorrow, 10:30 AM" },
    { client: "Neha Patel", topic: "New Fund Planning", time: "Wed, 3:00 PM" },
    { client: "Rahul Gupta", topic: "Tax Saving Plan", time: "Fri, 11:00 AM" },
  ];

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1565372918675-0b11e05d29a1?auto=format&fit=crop&w=1650&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: 8,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "1200px",
          mx: "auto",
          background: "rgba(255,255,255,0.9)",
          borderRadius: 4,
          p: 4,
          boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#2e7d32",
            fontWeight: "bold",
            mb: 4,
          }}
        >
          Financial Advisor Dashboard 💼
        </Typography>

        {/* Advisor Profile */}
        <Paper
          elevation={6}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
            p: 3,
            borderRadius: 3,
            mb: 4,
            background: "rgba(255,255,255,0.85)",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "#43a047",
              width: 80,
              height: 80,
              fontSize: "2rem",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Person fontSize="large" />
          </Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {advisor.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {advisor.title}
            </Typography>
            <Typography sx={{ mt: 1, color: "#2e7d32" }}>
              Managing {advisor.clients} clients | Total Assets: {advisor.totalAssets}
            </Typography>
            <Typography sx={{ fontWeight: 600, color: "#43a047" }}>
              Overall Performance: {advisor.performance}
            </Typography>
          </Box>
        </Paper>

        {/* Advisor Stats */}
        <Grid container spacing={3}>
          {[
            {
              icon: <People />,
              title: "Active Clients",
              value: advisor.clients,
            },
            {
              icon: <AccountBalance />,
              title: "Total Assets Managed",
              value: advisor.totalAssets,
            },
            {
              icon: <TrendingUp />,
              title: "Portfolio Growth",
              value: advisor.performance,
            },
            {
              icon: <ShowChart />,
              title: "Top Performing Fund",
              value: "Balanced Growth Fund",
            },
          ].map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  textAlign: "center",
                  borderRadius: 3,
                  background: "rgba(255,255,255,0.85)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: "#43a047",
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 1,
                  }}
                >
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

        {/* Client Summary */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Client Summary
          </Typography>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          >
            <Grid container spacing={2}>
              {clients.map((client, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Paper
                    elevation={4}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      textAlign: "center",
                      background: "rgba(255,255,255,0.8)",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontWeight: 600, color: "#2e7d32" }}
                    >
                      {client.name}
                    </Typography>
                    <Typography variant="body2">
                      Investment: {client.investment}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#43a047", fontWeight: 500 }}
                    >
                      Growth: {client.growth}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Box>

        {/* Upcoming Meetings */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Upcoming Meetings
          </Typography>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
            }}
          >
            <List>
              {meetings.map((meeting, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#43a047" }}>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${meeting.client} — ${meeting.topic}`}
                      secondary={meeting.time}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{
                        color: "#2e7d32",
                        borderColor: "#43a047",
                        "&:hover": {
                          backgroundColor: "#43a047",
                          color: "#fff",
                        },
                      }}
                    >
                      Join
                    </Button>
                  </ListItem>
                  {index < meetings.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
