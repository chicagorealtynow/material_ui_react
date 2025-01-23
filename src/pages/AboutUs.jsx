import React from 'react';
    import { Box, Typography, Container } from '@mui/material';

    function AboutUs() {
      return (
        <Box
          sx={{
            pt: 8,
            pb: 6,
            bgcolor: 'background.default',
            minHeight: 'calc(100vh - 100px)', // Adjust the value based on your header and footer height
          }}
        >
          <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              This is the about us page. Add your company information here.
            </Typography>
          </Container>
        </Box>
      );
    }

    export default AboutUs;
