import { Fragment } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Home from '../pages/Home'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'

//Fazendo acesso a página home, em que só irá acessar com o usuário logado
const Private = ({ Item }) => {
    const { signed } = useAuth()
  
    return signed > 0 ? <Item /> : <Signin />
  }

function RoutesApp() {
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home} />} />
                    <Route path="/" element={<Signin />} />
                    <Route exact path="/signup" element={<Signup />} />
                    <Route path="*" element={<Signin />} />  
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}

export default RoutesApp