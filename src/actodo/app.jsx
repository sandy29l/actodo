import Login from'./login.jsx';
import Actodo from './actodo.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './signup.jsx';
import { useState } from 'react';

function App() {

    const [loginuser,setloginuser]=useState([
            {
                username:"john",
                password:"123"
            },
        ]);

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login loginuser={loginuser} setloginuser={setloginuser} />}></Route>
                    <Route path='/signup' element={<Signup loginuser={loginuser} setloginuser={setloginuser} />}></Route>
                    <Route path='/actodo' element={<Actodo></Actodo>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App;