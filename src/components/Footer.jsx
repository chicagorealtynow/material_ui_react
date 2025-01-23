import React from 'react';
    import { Box, Typography, Container } from '@mui/material';

    function Footer() {
      return (
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              Business Name {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </Box>
      );
    }

    export default Footer;
