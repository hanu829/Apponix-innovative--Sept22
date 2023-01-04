import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { About, Contact, Home, Jewlry, MyLogin } from './pages'
import { Register } from './pages/auth/register/Register'
import { Layout } from './pages/layout/Layout'


export const App = () => {

    return (<>
    <Router>
    <Layout>
        <Routes>      
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<About/>}/>
       < Route path='/jewellary' element={<Jewlry/>}/>
       <Route path='/login' element={<MyLogin/>}/>
       <Route path='/register' element={<Register/>}/>
    
        </Routes>
        </Layout>
        </Router> 
    
    </>)
}