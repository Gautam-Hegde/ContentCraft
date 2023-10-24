import './App.css'
import Greeting from './Greeting';
import LandingPage from './LandingPage'
import LinkForm from './LinkForm'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage/>}/>
        <Route path="/" element={<Greeting/>}/>
        <Route path="/generate" element={<LinkForm/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
