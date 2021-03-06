import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/balance';

import registerServiceWorker from './registerServiceWorker';

import App from './components/App';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
