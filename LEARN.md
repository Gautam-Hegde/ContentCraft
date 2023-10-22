# Guide: ContentCraft 🧪

Welcome to the ContentCraft Learning Guide! This guide provides an overview of the technical aspects of the ContentCraft project, including how the backend is deployed to Azure using GitHub Actions and how the frontend is deployed using Vercel's CI/CD.

## Project Overview

ContentCraft is a web application that empowers users to transform YouTube video content into engaging tweets. Here, we'll explore the key technical aspects of this project.
- Currently the backend repo is kept private.

## Technologies Used

### Frontend

- **React**: ContentCraft's frontend is built using the React JavaScript library, providing a dynamic and responsive user interface.

- **Material-UI**: Material-UI is used for the design and styling of the frontend, offering a clean and modern user interface.

- **Axios**: Axios is employed for making HTTP requests to interact with the backend and external APIs.

- **Vercel**: Vercel is used for deploying the frontend application with its CI/CD capabilities.

### Backend

- **Node.js**: The backend of ContentCraft is powered by Node.js, a server-side JavaScript runtime.

- **Express**: Express.js is used as the web application framework for building the backend API.

- **OpenAI API**: To generate tweetable content, the project leverages the OpenAI API.

- **Azure**: Azure is used for deploying the backend API using GitHub Actions.
  
- **YouTube Transcript API**: The YouTube Transcript API is utilized to extract transcripts and captions from YouTube videos.
  The YouTube Transcript API is used in ContentCraft to extract transcripts and captions from YouTube videos. This feature allows users to select specific portions of the video for sharing on Twitter. The extracted transcript is then used in the tweet content generation process.

### Development Tools

- **Vite**: Vite is used as the build tool for the project, enabling fast development and hot module replacement.

- **Git and GitHub**: Git is employed for version control, and the project is hosted on GitHub for collaboration.

- **npm**: npm (Node Package Manager) is used for managing project dependencies and scripts.

