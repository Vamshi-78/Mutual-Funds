import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  AccountBalanceWallet,
  TrendingUp,
  ShowChart,
  MonetizationOn,
} from "@mui/icons-material";

export default function InvestorDashboard() {
  const investmentStats = [
    { title: "Total Investment", value: "$75,000", icon: <AccountBalanceWallet /> },
    { title: "Portfolio Value", value: "$92,450", icon: <MonetizationOn /> },
    { title: "Overall Growth", value: "+23.3%", icon: <TrendingUp /> },
    { title: "Active Funds", value: "9", icon: <ShowChart /> },
  ];

  const performance = [
    { label: "Equity Growth Fund", progress: 80 },
    { label: "Balanced Fund", progress: 65 },
    { label: "Debt Fund", progress: 45 },
    { label: "Index Fund", progress: 70 },
  ];

  const transactions = [
    { fund: "Equity Growth Fund", action: "Invested $2000", time: "2 days ago" },
    { fund: "Debt Fund", action: "Redeemed $1000", time: "5 days ago" },
    { fund: "Balanced Fund", action: "Invested $1500", time: "1 week ago" },
    { fund: "Index Fund", action: "Added $2500", time: "2 weeks ago" },
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
          Investor Dashboard 📈
        </Typography>

        {/* Investment Summary Cards */}
        <Grid container spacing={3}>
          {investmentStats.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={6}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  textAlign: "center",
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
                  {item.icon}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Fund Performance */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Fund Performance
          </Typography>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            {performance.map((fund, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography
                  variant="body1"
                  sx={{ mb: 1, fontWeight: 500, color: "#2e7d32" }}
                >
                  {fund.label}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={fund.progress}
                  sx={{
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: "#e0e0e0",
                    "& .MuiLinearProgress-bar": {
                      background: "linear-gradient(90deg, #2e7d32, #81c784)",
                    },
                  }}
                />
              </Box>
            ))}
          </Paper>
        </Box>

        {/* Recent Transactions */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Recent Transactions
          </Typography>
          <Paper
            sx={{
              p: 3,
              borderRadius: 3,
              boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
              background: "rgba(255,255,255,0.9)",
            }}
          >
            <List>
              {transactions.map((txn, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar sx={{ bgcolor: "#43a047" }}>
                        {txn.fund[0]}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${txn.fund} — ${txn.action}`}
                      secondary={txn.time}
                    />
                  </ListItem>
                  {index < transactions.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
