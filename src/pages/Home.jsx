import React from 'react';
    import { Box, Typography, Button, Container } from '@mui/material';

    function Home() {
      return (
        <Box
          sx={{
            pt: 8,
            pb: 6,
            bgcolor: 'background.default',
            minHeight: 'calc(100vh - 100px)', // Adjust the value based on your header and footer height
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Welcome to Our Business
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              We offer top-notch services to help your business grow.
            </Typography>
            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" color="primary">
                Get Started
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }

    export default Home;
