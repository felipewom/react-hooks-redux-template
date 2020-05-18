import React from 'react';
import {Provider} from 'react-redux';
import {globalStore} from '../../redux';
import AppRoutes from './AppRoutes';
import './style.css';

const App = ({history}) => (
  <Provider store={globalStore}>
    <AppRoutes history={history}/>
  </Provider>
);
export default App;
