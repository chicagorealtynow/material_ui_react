import React from 'react';
    import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';

    const services = [
      { title: 'Service 1', description: 'Description of service 1.' },
      { title: 'Service 2', description: 'Description of service 2.' },
      { title: 'Service 3', description: 'Description of service 3.' },
    ];

    function Services() {
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
              Our Services
            </Typography>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="h6" component="h2">
                        {service.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {service.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      );
    }

    export default Services;
