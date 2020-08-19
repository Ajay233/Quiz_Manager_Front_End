import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import HelpIndex from './contentComponents/helpIndex'
import AccountManagementHelp from './contentComponents/accountManagementHelp'
import history from '../history'

import '../stylesheets/help.css'

class Help extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Router history={history}>
          <Switch>
            <Route path="/help" exact render={() => <HelpIndex />} />
            <Route path="/help/accountManagementHelp" render={() => <AccountManagementHelp />} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default Help;