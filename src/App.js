//import './App.css';
import { useState } from 'react';
import HomePage from './components/HomePage';
import About from './components/About';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";

function App() {

  var toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  const [mode, setMode] = useState('light');
  return (
    <>
      <Router>
        <div className="App">
          <Navigation title='Textutils' mode={mode} toggleMode={toggleMode} />
          <Switch>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/">
              <HomePage mode={mode} />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
