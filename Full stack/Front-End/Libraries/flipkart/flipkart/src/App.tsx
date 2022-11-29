import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { About, Contact, Home, Jewlry, MyLogin } from './pages'
import { Layout } from './pages/layout'


export const App = () => {

    return (<>
    <Router>
    <Layout>
        <Routes>      
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<About/>}/>
       < Route path='/jewlry' element={<Jewlry/>}/>
       <Route path='/login' element={<MyLogin/>}/>
    
        </Routes>
        </Layout>
        </Router> 
    
    </>)
}