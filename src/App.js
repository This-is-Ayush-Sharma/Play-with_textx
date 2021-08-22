import './App.css';
// import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');// whether dark mode is enabled or not.
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = "#47306d";
      showAlert("Dark mode has been Enabled.", "success");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been Enabled.", "success")
    }
  }
  return (
    <>
      {/* <Router> */}
      <NavBar title="TextAnalyzer by AYUSH SHARMA" abouttext="About TextAnalyzer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      {/* <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/"> */}
          <TextForm heading="ENTER TEXT TO ANALYZE BELOW" mode={mode} showAlert={showAlert} />
        {/* </Route>
      </Switch>
      </Router>
      <About/> */}
    </>
  );
}

export default App;
