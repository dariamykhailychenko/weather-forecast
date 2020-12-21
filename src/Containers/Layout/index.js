import React  from 'react';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from '../AppRouter';
import store from '../../store/store';
import '../../App.css';

const Layout = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppRouter/> 
      </Router>
    </Provider>
  );
};

export default Layout;