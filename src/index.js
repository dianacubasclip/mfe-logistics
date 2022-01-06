
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './serviceWorker';

window.renderLogistics = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  unregister();
}

window.unmountLogistics = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};