import React from 'react';
import {useSelector} from 'react-redux';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../../components/Header';
import Login from '../Login';

const AppRoutes = ({history}) => {
  const counter = useSelector(state => state.counter);
  return (
    <Router history={history}>
      <div>
        <Header counter={counter}/>
        <div className={'page-holder'}>
          <Switch>
            <Route path="/login" exact={true} component={Login}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
};
export default AppRoutes;
