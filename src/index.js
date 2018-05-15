import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieViewer from './containers/MovieViewer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<MovieViewer />, document.getElementById('root'));
registerServiceWorker();
