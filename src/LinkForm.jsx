import React, { useState, useEffect } from 'react';
import { Button, TextField, Box, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import Axios from 'axios';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function LinkForm() {

  const myEndPoint=import.meta.env.VITE_SERVER_ENDPOINT;
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [responseText, setResponseText] = useState('');
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (e) => {
    setYoutubeUrl(e.target.value);
  };

  const handleCopyToClipboard = () => {
    if (responseText) {
      navigator.clipboard.writeText(responseText).then(() => {
        setShowAlert(true);
      });
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    if (showAlert) {
      const timeout = setTimeout(() => {
        setShowAlert(false); // Automatically hide the alert after 2 seconds
      }, 2000); // Set the duration to 2 seconds (2000 milliseconds)
      return () => clearTimeout(timeout);
    }
  }, [showAlert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.post(`${myEndPoint}/summarize`, {
        youtubeUrl: youtubeUrl,
      });

      setLoading(false);

      console.log('Response:', response.data);

      if (response.data && response.data.summarizedText) {
        setResponseText(response.data.summarizedText);
      } else {
        console.error('Invalid response from the server.');
      }
    } catch (error) {
      setLoading(false);
      console.error('An error occurred while making the request:', error);
    }
  };

  return (
    <Box width={500}>
      {showAlert && (
        <Alert
          severity="success"
          onClose={handleCloseAlert}
          sx={{ position: 'fixed', top: 0, width: '100%', maxWidth: '300px', left: '50%', transform: 'translateX(-50%)' }}
        >
          Copied to clipboard!
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="YouTube URL"
              variant="outlined"
              fullWidth
              value={youtubeUrl}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              disabled={loading}
            >
              {loading ? <CircularProgress color="secondary" size={40} /> : 'Generate'}
            </Button>
          </Grid>
        </Grid>
      </form>
      {responseText && (
        <Box mt={3} p={2} border={1} borderColor="grey.300" boxShadow={2} position="relative">
          <ContentCopyIcon
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: '10px',
              right: '10px',
            }}
            onClick={handleCopyToClipboard}
          />
          <Typography variant="h6">Twitter thread 🚀</Typography>
          {responseText}
        </Box>
      )}
    </Box>
  );
}

export default LinkForm;
