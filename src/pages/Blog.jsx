import React from 'react';
    import { Box, Typography, Container } from '@mui/material';

    function Blog() {
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
              Blog
            </Typography>
            <Typography variant="body1" paragraph>
              This is the blog page. Add your blog content here.
            </Typography>
          </Container>
        </Box>
      );
    }

    export default Blog;
