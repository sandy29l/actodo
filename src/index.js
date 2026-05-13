import React from 'react';
import ReactDOM from 'react-dom/client';
// import Rdm from './rdm.js';
// import Form from './formcomp.js';
import Login from'./actodo/login.jsx';
import Actodo from './actodo/actodo.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './actodo/signup.jsx'; 
import App from './actodo/app.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  {/* <Actodo></Actodo> */}
  {/* <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  </BrowserRouter> */}
  <App></App>
  
  </div>
);