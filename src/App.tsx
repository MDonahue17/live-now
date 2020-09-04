import React from 'react';
import Home from './components/Home';
import { Provider } from 'react-redux';
import store from './store/store';

export default function App() {
  return (
    <Provider store = {store}>
      <div>
        <Home />
      </div>
    </Provider>
    
  );
}
