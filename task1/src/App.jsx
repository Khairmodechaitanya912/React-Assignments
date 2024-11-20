import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Holidays from './components/Holidays'
import Home from './components/Home'
import Navigation from './components/Navigation'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import MusicEvent from './components/MusicEvent'
import Features from './components/Features'

function App() {
  return (
    <> 
      <BrowserRouter>
       <Navigation />
        <Routes>
          <Route path='/' element ={ <Home />}/>
          <Route path='/holiday' element ={ <Holidays /> }/>
          <Route path='/musicevent' element ={ <MusicEvent/>}/>
          <Route path='/feature' element ={ <Features/>}/>
          <Route path='*' element={<h2 className='text-center text-danger mt-5'>404 | Page Not Found</h2>}/>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
