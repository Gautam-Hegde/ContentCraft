import React, { useEffect } from 'react';
import { Button, Container, Typography, Box, Paper, Link } from '@mui/material';
import {Fade} from "react-awesome-reveal";
import { useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typed from 'typed.js';


const LandingPage = () => {
  const navigate = useNavigate();
  const githubUrl = 'https://github.com/Gautam-Hegde';

  useEffect(() => {
    // Text typing animation setup for "Content on Steroids"
    const options = {
      strings: ["Captivating Tweets with Ease!","Content on Steroids"],
      typeSpeed: 35, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      backDelay: 1500, // Delay after finishing typing
      startDelay: 500, // Delay before typing starts
      showCursor: true, // Show blinking cursor
    };

    const typed = new Typed('.tagline', options);

    return () => {
      typed.destroy(); // Clean up the Typed.js instance
    };
  }, []);

  return (
    <>
    <Fade>
    <Container>
        <Paper elevation={10} style={{ padding: '2rem', marginTop: '3rem' }}>
          <Typography variant="h3" gutterBottom>
            <Box fontWeight="bold" textAlign="center">
              <span className="tagline"></span>
            </Box>
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary">
            Elevate your content with our Video ➡ Tweet Generator with Ease! 🚀
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                navigate('/generate');
              }}
            >
              Get Started
            </Button>
          </Box>
        </Paper>
        <Link href={githubUrl} style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: '2' }}>
          <div style={{backgroundColor:"white" ,width:"90vw"}}>
            <Typography variant="body2" color="textSecondary" style={{fontSize:"1.5rem", padding:"1rem",display:"flex" ,justifyContent:"center", alignItems:"center"}}>
              Made with ❤️ by Gautam Hegde
              <GitHubIcon style={{ fontSize: '3rem'}} />
            </Typography>
          </div>
        
      </Link>
      </Container>
    </Fade>
      
    </>
  );
};

export default LandingPage;
