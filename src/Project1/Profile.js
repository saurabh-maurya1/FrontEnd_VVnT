import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Grid,
  Paper,
  TextField,
  Button,
  
  Toolbar,
  Typography,
  createTheme,
  ThemeProvider,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ACD600',
    },
  },
});


const LoginSignupForm = () => {
  const [loginMode, setLoginMode] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '', // Corrected the key to 'username'
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' }); // Reset error on change
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.username) { // Corrected to check 'username' instead of 'Username'
      errors.username = 'Username is required'; // Corrected the key to 'username'
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (!loginMode && formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      setSubmitted(true);
      // Simulate form submission (replace with actual logic)
      setTimeout(() => {
        setSubmitted(false);
        console.log('Form submitted:', formData);
        // Reset form data after submission if needed
        setFormData({ email: '', password: '', confirmPassword: '', username: '' }); // Corrected the key to 'username'
      }, 1500);
    }
  };

  return (
    <>

      <Grid container justifyContent="center" alignItems="center" style={{ width: "70%", paddingTop: "100px", paddingBottom: "100px" }} className='offset-2 '>

        <Grid item xs={12} sm={6}>
          <Paper elevation={3} style={{ marginTop: " 100px", padding: "30px" }} sx={{ borderRadius: '23px', p: '20px', boxShadow: "3px 5px 14px 3px grey" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} justifyContent="center" alignItems="center">

                <Toolbar>
                  <Typography variant="h6" align="center" style={{ flexGrow: 1, background: "#ACD600", borderRadius: "8px", fontWeight: " 800" }}><Button onClick={() => setLoginMode(!loginMode)} color='inherit'>
                    Login
                  </Button></Typography>
                </Toolbar>

                {!loginMode && (
                  <Grid item xs={12}>

                    <TextField
                      label="Username"
                      name="username" // Corrected the key to 'username'
                      value={formData.username} // Corrected the key to 'username'
                      onChange={handleFormChange}
                      fullWidth
                      error={!!formErrors.username} // Corrected the key to 'username'
                      helperText={formErrors.username} // Corrected the key to 'username'
                    />
                  </Grid>
                )}
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    fullWidth
                    error={!!formErrors.email}
                    helperText={formErrors.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    onChange={handleFormChange}
                    fullWidth
                    error={!!formErrors.password}
                    helperText={formErrors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={togglePasswordVisibility} edge="end">
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                {!loginMode && (
                  <>
                    <Grid item xs={12}>
                      <TextField
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleFormChange}
                        fullWidth
                        error={!!formErrors.confirmPassword}
                        helperText={formErrors.confirmPassword}
                      />
                    </Grid>
                  </>
                )}
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" disabled={submitted}>
                    {loginMode ? 'Login' : 'Sign Up'}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button onClick={() => setLoginMode(!loginMode)} color="primary">
                  {loginMode ? 'Switch to Sign Up' : 'Switch to Login'}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoginSignupForm />
    </ThemeProvider>
  );
};

export default Profile;
