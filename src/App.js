import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import HomePage from './Components/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
      <Switch>
        <Route path='about' component={About}/>
        <Route exact path='/' component={HomePage}/>
      </Switch>
      </Router>
      <h1>Test</h1>
    </div>
  );
}

export default App;
