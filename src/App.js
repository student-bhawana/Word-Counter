import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { TextForm } from './components/TextForm';
function App() {
  const[mode,setMode]= useState("light") //Whether dark mode is enabled or not

  const toggleMode=() =>{
    if(mode==='light'){
      setMode('dark')
    document.body.style.backgroundColor = "dark"
      // document.body.style.color = "white"
      
    }else{
      setMode('light')
     document.body.style.backgroundColor = "white"
      // document.body.style.color = "black"
    }
  }
  return (
    <div className="App">
       <Navbar title="TextUtilities" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the text to analyze" />
        {/* <About/> */}
      </div>
    </div>
  );
}

export default App;
