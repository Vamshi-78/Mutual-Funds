import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Box } from "@mui/material";
import { Home, Info, ContactSupport, Logout } from "@mui/icons-material";

export default function AppMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  const [currentUser, setCurrentUser] = React.useState(null);

  React.useEffect(() => {
    const userStr = localStorage.getItem("currentUser");
    if (userStr) {
      setCurrentUser(JSON.parse(userStr));
    }
  }, []);

  const handleLogout = () => {
    // Clear all authentication-related data
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    
    // Force a page refresh to clear any cached state
    window.location.href = "/";
  };

  const menuItems = [
    { label: "Home", path: "/home", icon: <Home /> },
    { label: "About", path: "/about", icon: <Info /> },
    { label: "Contact", path: "/contact", icon: <ContactSupport /> },
  ];

  return (
    <AppBar position="static" sx={{ mb: 3 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mutual Fund Platform
        </Typography>
        {currentUser && (
          <Typography variant="body1" sx={{ mr: 3 }}>
            Welcome, {currentUser.fullName}
          </Typography>
        )}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {menuItems.map((item) => (
            <Button
              key={item.path}
              color="inherit"
              component={Link}
              to={item.path}
              sx={{
                mx: 1,
                backgroundColor: location.pathname === item.path ? "rgba(255,255,255,0.1)" : "transparent",
                "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" },
              }}
              startIcon={item.icon}
            >
              {item.label}
            </Button>
          ))}
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{ ml: 2 }}
            startIcon={<Logout />}
          >
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
