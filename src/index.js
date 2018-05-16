import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieViewer from './containers/MovieViewer';
import registerServiceWorker from './registerServiceWorker';

/* import redux store */
import { Provider } from 'react-redux';
import configureStore from './store'
const store = configureStore()

store.subscribe(()=>{
  var reduxState = JSON.stringify(store.getState());
  sessionStorage.setItem('reduxState', reduxState);
});

ReactDOM.render(<Provider store={store}><MovieViewer store={store}/></Provider>, document.getElementById('root'));
registerServiceWorker();
