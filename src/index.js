import React, { useEffect } from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import home from './components/home.jsx'
import terms from './components/terms.jsx'

const loader = document.querySelector(".loader-container");
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

render((
<App hideLoader={hideLoader} showLoader={showLoader} />,
  <Router>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/terms-condition" component={terms}/>
        <Route exact path="/privacy" component={terms}/>
        <Route exact path="/commands" component={terms}/>
        <Route exact path="/premium" component={terms}/>
        <Route exact path="/api/v1" component={terms}/>
        <Route component={terms} />
      </Switch>
  </Router>
), document.getElementById("root"))

reportWebVitals();
