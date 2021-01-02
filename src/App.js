
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Menu from './component/Menu';
import Portfolio from './component/Portfolio';
import Resume from './component/Resume';

function App() {
  return (
    <Router>
    <section className="main">
          <Menu/>
        <div>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={ About } />
              <Route exact path="/resume" component={ Resume } />
              <Route exact path="/portfolio" component={ Portfolio } />
              <Route exact path="/contact" component={ Contact } />
          </Switch>
        </div>
    </section>
    </Router>
  );
}

export default App;
