import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import { connect, Provider } from 'react-redux';
import { mapStateToAppProps, mapDispatchToAppProps } from './mapToAppProps';

const store = createStore(rootReducer);

const ConnectedApp = connect(mapStateToAppProps, mapDispatchToAppProps)(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <ConnectedApp />
    </Provider>
  </React.StrictMode>
);