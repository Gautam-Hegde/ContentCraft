import './App.css'
import LandingPage from './LandingPage'
import LinkForm from './LinkForm'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/generate" element={<LinkForm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
