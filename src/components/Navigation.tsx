import Home from '@mui/icons-material/Home';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router';

const Navigation = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            React Trainer
          </Typography>
          <Button component={Link} to='/' color='inherit'>
            <Home />
          </Button>
          <Button component={Link} to='/admin' color='inherit'>
            Admin
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navigation;
