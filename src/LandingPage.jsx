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
    <Container style={{backgroundColor:"transparent" ,width:"40vw", }}>
          <Typography variant="h3" gutterBottom>
            <Box fontWeight="bold" textAlign="center">
              <span className="tagline" style={{color:"black"}}></span>
            </Box>
          </Typography>
          <Typography variant="h6" align="center" style={{fontSize:"1.25rem",color:"black"}} >
            Elevate your content with our Video ➡ Tweet Generator with Ease! 🚀
          </Typography>
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              style={{ backgroundColor: 'transparent', border: '3px solid purple',color:"purple" , margin: '0 10px' ,fontWeight:"bold" ,fontSize:"1rem" ,padding:"10px 20px" ,borderRadius:"10px" ,cursor:"pointer" ,transition:"all 0.3s ease-in-out",boxShadow:"0 0 20px 0px purple"}}
              variant="contained"
              size="large"
              onClick={() => {
                navigate('/generate');
              }}
            >
              Get Started
            </Button>
          </Box>
        <Link href={githubUrl} style={{ position: 'absolute', bottom: '10px', left: '10px', zIndex: '2' }}>
        
      </Link>
      </Container>
    </Fade>
      
    </>
  );
};

export default LandingPage;
