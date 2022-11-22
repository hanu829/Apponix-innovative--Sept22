import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'


import { Contact, Home } from './pages'
import { Mymovies } from './pages/mymovies/Mymovies'

export const App = () => {

    return (<>
    <Router>
        <Routes>
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<h1>hello im about</h1>}/>
       
       < Route path='/about' element={<Mymovies/>}/>

        </Routes>
        </Router> 
    
    </>)
}         