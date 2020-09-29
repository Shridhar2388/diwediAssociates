import React from 'react';
import { Router, Redirect } from 'react-router';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome,faGavel } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { createBrowserHistory } from 'history';
import { ScrollToTop } from '../common/ScrollToTop';
import { Home } from '../Home/home.component';
import { About } from '../About/about.component';
import { Service } from '../Services/services.component';
import { Contact } from '../Contact/contact.component';
library.add(faHome);
const appHistory = createBrowserHistory();

function App() {
  return (
    <>

      <Router history={appHistory}>
        <ScrollToTop>
          <Switch>
            <Route path='/' exact component={Home}></Route>
            <Route path='/about' component={About}></Route>
            <Route path='/service' component={Service}></Route>
            <Route path='/contact' component={Contact}></Route>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
