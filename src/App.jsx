import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SportsPage from './components/SportsPage';
import MapPage from './components/MapPage';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <NavBar className="fixed-navbar" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/map/:sportId/:city" component={MapPage} />
        <Route path="/map" component={MapPage} />
        <Route path="/sports" component={SportsPage} />
        <Route path="/contactus" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
