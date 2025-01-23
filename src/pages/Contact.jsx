import React from 'react';
    import { Box, Typography, Container, TextField, Button } from '@mui/material';

    function Contact() {
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
            <Typography variant="h4" align="center" gutterBottom>
              Contact Us
            </Typography>
            <Box component="form" sx={{ mt: 3 }}>
              <TextField fullWidth label="Name" margin="normal" />
              <TextField fullWidth label="Email" margin="normal" type="email" />
              <TextField fullWidth label="Phone Number" margin="normal" />
              <TextField
                fullWidth
                label="Message"
                margin="normal"
                multiline
                rows={4}
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </Box>
          </Container>
        </Box>
      );
    }

    export default Contact;
