import './App.css'
import { Routes, Route } from 'react-router-dom' 
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Logbook from './pages/Logbook'
import Duties from './pages/Duties'

function App() {
  

  return (
    <div className="app">
        <Navigation />
        
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='/Logbook' element={ <Logbook /> } />
          <Route path='/Duties' element={ <Duties /> } />
        </Routes>
    </div>
  )
}

export default App
