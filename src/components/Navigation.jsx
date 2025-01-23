import React from 'react';
    import { Link } from 'react-router-dom';
    import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

    function Navigation() {
      return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Business Name
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/about">
                About Us
              </Button>
              <Button color="inherit" component={Link} to="/services">
                Services
              </Button>
              <Button color="inherit" component={Link} to="/blog">
                Blog
              </Button>
              <Button color="inherit" component={Link} to="/contact">
                Contact
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      );
    }

    export default Navigation;
