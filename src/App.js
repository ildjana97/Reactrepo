
import './App.css';
import React from 'react';
import ProjectForm from './components/Project/ProjectForm';
import HeaderTitle from './components/Header/Title';


function App() {
  return (
    <div className="App">
      <HeaderTitle></HeaderTitle>
      <ProjectForm></ProjectForm>
    </div>


  /*  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>  */
  );
}

export default App;
