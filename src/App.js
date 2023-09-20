// import logo from './logo.svg';
// import './App.css';

// import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';

// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {

  //Alert message
  const [alert, setAlert] = useState(null);   //useState is the initial state

  const showAlert = (message,typeOfAlert) => {
    setAlert({
      msg: message,
      typeOfAlert: typeOfAlert
    })

    //To remove the alert slide using setTimeout
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  //Mode - darkmode,lightmode
  const [mode, setMode] = useState('light')  //whether dar mode is enabled or not
  
  const toggleMode = () => {
    if (mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been successfully enabled", "success");
      document.title = 'TextUtils - Dark mode'
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been successfully enabled", "success");
      document.title = 'TextUtils - Light mode'
    }
    
  }
  return (
    <>
      {/* / */}
        <Navbar aboutText="About Us" contactText="Contact Us" mode={mode} toggleMode={toggleMode} />    {/*calling the Navbar react component , then passing a property/props */}
          
        <Alert alert={alert} />
        <div className="container my-3">
          <Textform heading="Enter your text here" mode={mode} />
        </div>

        {/* <Routes>
          <Route element= {<About />}/>
           

          <div className="container my-3">
          <Route path="/">
            
              <Textform heading="Enter your text here" mode={mode} />
            </div>
          </Route>
        </Routes> */}

        {/* <Routes>   
          <Route path="/about" element= {<About />} />
          <Route path="/" element={<Textform heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
      </Router> */}
      
      

      <About mode={mode} />
    </>
  );
}

export default App;
