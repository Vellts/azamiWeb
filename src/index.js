import React from 'react';
import { render } from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import home from './components/renders/home.jsx'
import premium from './components/renders/premium.jsx'
import commands from './components/renders/commands.jsx'
import NotFound from './components/renders/NotFound.jsx'
import Endpoint from './components/renders/endpoints.jsx'

render((
  <Router>
      <Switch>
        <Route exact strict path="/" component={home}/>
        <Route path="/terms-condition/" component={premium}/>
        <Route path="/privacy/" component={premium}/>
        <Route path="/commands/" component={commands}/>
        <Route path="/premium/" component={premium}/>
        <Route path="/api/v1/" component={Endpoint} />
        <Route path="*" component={NotFound} />
      </Switch>
  </Router>
), document.getElementById("root")) 

/*render((
=======
>>>>>>> 0940cda835511c395ea55597b2dc655c9b4b29d4
  <Router>
      <Switch>
        <Route exact path="/" component={home}/>
        <Route exact path="/terms-condition/" component={premium}/>
        <Route exact path="/privacy/" component={premium}/>
        <Route exact path="/commands/" component={commands}/>
        <Route exact path="/premium/" component={premium}/>
        <Route component={premium} />
      </Switch>
  </Router>
), document.getElementById("root")) */

reportWebVitals();
