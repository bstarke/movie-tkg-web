import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Box, Container} from "@material-ui/core";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Box display='flex' flexGrow={1}>
            <Typography>Version: 1.0.0</Typography>
          </Box>
          <Typography>©{currentYear} Brad Starkenberg</Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
