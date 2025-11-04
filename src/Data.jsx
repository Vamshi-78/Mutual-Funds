import React from "react";
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  BarChart,
  TrendingUp,
  Insights,
  Timeline,
  ShowChart,
  Assessment,
} from "@mui/icons-material";

export default function DataAnalystDashboard() {
  const kpis = [
    { icon: <TrendingUp />, title: "Market Growth", value: "+14.2%" },
    { icon: <Assessment />, title: "Funds Analyzed", value: "245" },
    { icon: <ShowChart />, title: "Accuracy Rate", value: "97.5%" },
    { icon: <Timeline />, title: "New Reports", value: "32 this week" },
  ];

  const recentReports = [
    { name: "Equity Fund Trend Analysis", date: "Nov 3, 2025", status: "Completed" },
    { name: "Debt Fund Risk Assessment", date: "Nov 2, 2025", status: "In Review" },
    { name: "Hybrid Portfolio ROI Report", date: "Nov 1, 2025", status: "Published" },
    { name: "Sectoral Growth Forecast", date: "Oct 30, 2025", status: "Completed" },
  ];

  const insights = [
    "Equity funds show a 6% improvement in Q3 returns.",
    "Debt funds remain stable despite market volatility.",
    "Hybrid portfolios outperform conservative funds by 3.2%.",
    "SIP investors increased by 12% in the last quarter.",
  ];

  return (
    <Box
      sx={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1647426012818-82b41f25ad37?auto=format&fit=crop&w=1600&q=80')",
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
          Data Analyst Dashboard 📈
        </Typography>

        {/* KPI Cards */}
        <Grid container spacing={3}>
          {kpis.map((kpi, index) => (
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
                  {kpi.icon}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {kpi.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {kpi.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Insights Section */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Key Market Insights
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
              {insights.map((insight, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <Insights sx={{ color: "#43a047", mr: 2 }} />
                    <ListItemText primary={insight} />
                  </ListItem>
                  {index < insights.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>

        {/* Recent Reports */}
        <Box sx={{ mt: 5 }}>
          <Typography
            variant="h5"
            sx={{ mb: 2, fontWeight: 600, color: "#2e7d32" }}
          >
            Recent Reports
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
              {recentReports.map((report, index) => (
                <React.Fragment key={index}>
                  <ListItem>
                    <BarChart sx={{ color: "#43a047", mr: 2 }} />
                    <ListItemText
                      primary={report.name}
                      secondary={`${report.date} — ${report.status}`}
                    />
                  </ListItem>
                  {index < recentReports.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
