// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useNavigate,
} from 'react-router-dom';

import {
  CssBaseline, AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemButton,
  ListItemText, Box, Container, Grid, Paper, IconButton, Divider, Button,
  TextField
} from '@mui/material';

import {
  Dashboard as DashboardIcon,
  AdminPanelSettings as AdminIcon,
  Person as InvestorIcon,
  People as AdvisorIcon,
  Analytics as AnalystIcon,
  Assessment as AnalyticsIcon,
  Menu as MenuIcon
} from '@mui/icons-material';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// ================= AUTH CONTEXT ===================
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = React.useState(null);

  const login = (username, password) => {
    if (username && password) {
      setUser({ name: username });
      return true;
    }
    return false;
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  return React.useContext(AuthContext);
}

// ================ PRIVATE ROUTE ====================
function PrivateRoute({ children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
}

// ================= THEME ========================
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1565c0' },
    background: { default: '#f5f7fb' }
  },
  typography: {
    h4: { fontWeight: 600 },
    h6: { fontWeight: 600 }
  }
});

// ============= REUSABLE COMPONENTS ===============
function StatCard({ title, value, icon, color }) {
  return (
    <Paper elevation={2} sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
      <Box sx={{ mr: 2, color: color || 'primary.main' }}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2" color="text.secondary">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
      </Box>
    </Paper>
  );
}

function ChartCard({ title, data }) {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>{title}</Typography>
      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={data}>
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#1976d2" />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}

// =============== LAYOUT ==========================
function DashboardLayout({ title, children }) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => setOpen(!open);
  const { user, logout } = useAuth();

  const menu = [
    { text: 'Home', to: '/', icon: <DashboardIcon /> },
    { text: 'Admin', to: '/admin', icon: <AdminIcon /> },
    { text: 'Investor', to: '/investor', icon: <InvestorIcon /> },
    { text: 'Advisor', to: '/advisor', icon: <AdvisorIcon /> },
    { text: 'Analyst', to: '/analyst', icon: <AnalystIcon /> }
  ];

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>{title}</Typography>
          {user && (
            <>
              <Typography variant="body1" sx={{ mr: 2 }}>{user.name}</Typography>
              <Button color="inherit" onClick={logout}>Logout</Button>
            </>
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 240, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>Navigation</Typography>
          <Divider sx={{ mb: 1 }} />
          <List>
            {menu.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton component={Link} to={item.to} onClick={toggleDrawer}>
                  {item.icon && <Box sx={{ mr: 2 }}>{item.icon}</Box>}
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Container maxWidth="lg">{children}</Container>
      </Box>
    </Box>
  );
}

// =============== MOCK DATA =======================
const chartData = [
  { month: 'Jan', value: 100 },
  { month: 'Feb', value: 110 },
  { month: 'Mar', value: 125 },
  { month: 'Apr', value: 130 },
  { month: 'May', value: 145 },
];

// =============== PAGES ===========================
function Landing() {
  return (
    <DashboardLayout title="Mutual Fund Dashboard">
      <Typography variant="h4" gutterBottom>Welcome to FEDF-PS06</Typography>
      <Typography color="text.secondary" sx={{ mb: 4 }}>
        Explore, manage, and analyze mutual funds all in one place.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Total Funds" value="42" icon={<DashboardIcon />} color="primary.main" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Active Users" value="1560" icon={<InvestorIcon />} color="success.main" />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Avg. Return (YTD)" value="12.4%" icon={<AnalyticsIcon />} color="secondary.main" />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Overall Performance Trend" data={chartData} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

function Admin() {
  return (
    <DashboardLayout title="Admin Console">
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Funds Managed" value="18" icon={<AdminIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Pending Reviews" value="5" icon={<AnalyticsIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="New Submissions" value="12" icon={<DashboardIcon />} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="AUM Growth" data={chartData} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

function Investor() {
  return (
    <DashboardLayout title="Investor Overview">
      <Typography variant="h4" gutterBottom>Investor Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="My Funds" value="7" icon={<InvestorIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Portfolio Value" value="₹4.2L" icon={<AnalyticsIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="1Y Return" value="11.5%" icon={<DashboardIcon />} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Portfolio Performance" data={chartData} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

function Advisor() {
  return (
    <DashboardLayout title="Advisor Workspace">
      <Typography variant="h4" gutterBottom>Advisor Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Clients" value="25" icon={<AdvisorIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Articles Published" value="8" icon={<DashboardIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Pending Requests" value="3" icon={<AnalyticsIcon />} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Client Growth" data={chartData} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

function Analyst() {
  return (
    <DashboardLayout title="Analyst Reports">
      <Typography variant="h4" gutterBottom>Analyst Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <StatCard title="Funds Analyzed" value="28" icon={<AnalyticsIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Avg. 3Y Return" value="9.8%" icon={<DashboardIcon />} />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatCard title="Reports Published" value="14" icon={<AdminIcon />} />
        </Grid>
        <Grid item xs={12}>
          <ChartCard title="Market Trend" data={chartData} />
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>Login</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Typography color="error">{error}</Typography>}
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
}

// =================== APP ROOT =====================
export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Landing /></PrivateRoute>} />
            <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
            <Route path="/investor" element={<PrivateRoute><Investor /></PrivateRoute>} />
            <Route path="/advisor" element={<PrivateRoute><Advisor /></PrivateRoute>} />
            <Route path="/analyst" element={<PrivateRoute><Analyst /></PrivateRoute>} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
