import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import About from './contents/About';
import Contact from './contents/Contact';
import Home from './contents/Home';
import Portfolio from './contents/Portfolio';

const GlobalStyle = createGlobalStyle`
  body{
  background: linear-gradient(${props => props.theme.mode === 'dark' ? '#868f96, #596164' : '(#ff758c,#764ba2'});
  }

`

function App() {
  const [theme, setTheme] = useState({ mode: 'dark'});
  return (
    <ThemeProvider theme={theme}>
      <>
    <GlobalStyle />
    <Router>
    <div className="App">
    <Navbar />
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/portfolio">
    <Portfolio />
    </Route>
    <Route path="/contact">
    <Contact />
    </Route>
    <div class="back1 glass" onClick={e => setTheme(
      theme.mode === 'dark' ? {mode: 'light'} : {mode: 'dark'}
    )}><i class={theme.mode === 'dark' ? "fa fa-sun i1" : "fa fa-moon i1"}></i></div>
    </div>
    </Router>
    </>
    </ThemeProvider>
    );
  }
  
  export default App;
  