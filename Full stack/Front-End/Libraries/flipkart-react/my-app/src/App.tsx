import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { About, Contact, Home, jewellary, MyLogin } from './pages'
import { Register } from './pages/auth/register/Register'
import { Layout } from './pages/layout'


export const App = () => {

    return (<>
    <Router>
    <Layout>
        <Routes>      
       < Route path='/' element={<Home/>}/>
       < Route path='/contact' element={<Contact/>}/>
       < Route path='/about' element={<About/>}/>
       < Route path='/jewellary' element={<jewellary/>}/>
       <Route path='/login' element={<MyLogin/>}/>
       <Route path='/register' element={<Register/>}/>
    
        </Routes>
        </Layout>
        </Router> 
    
    </>)
}