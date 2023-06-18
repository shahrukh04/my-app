
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/alert';

// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert =(message, type)=>{
        setAlert({
          msg: message,
          type: type
        })
        setTimeout(() => {
          setAlert(null);
        }, 1500);
      }
      const toggleMode = ()=>{
        if(mode === 'light'){
          setMode('dark');
          document.body.style.backgroundColor = '#0c6663'
          showAlert("Dark mode has been enabled", "success ")
        }
        else
        {
          setMode('light');
          document.body.style.backgroundColor = '#371c1c'
          showAlert("Light mode has been enabled", "success ")
        }
      }
      return (
        
        <>     
<Navbar title="Shahrukh"  mode={mode} toggleMode={toggleMode} />
<Alert alert = {alert}/>

<div className="container"> 
{/* <BrowserRouter>
      <Routes>
<Route exact path='/about' element={< About/>}></Route> */}
      {/* <Route exact path='/' element={<TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode}/>}></Route> */}
      {/* </Routes> */}
    {/* </BrowserRouter> */}
       {<TextForm showAlert={showAlert} heading="enter the text to analyze below" mode={mode}/>}
        </div>

{/* <About/> */}

</>

  );
}
export default App;
