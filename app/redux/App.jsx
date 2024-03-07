import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Achat from './Achat';


function App() {
  return (
    <Provider store={store}>
      <Achat/>
    </Provider>
  );
}

export default App;
