import React from 'react';
import ReactDOM from 'react-dom';
import './Component.css';
import { unregister } from './serviceWorker';

import pepe from '../public/evil-pepe.png'

const Drawer = () => {
  return (
    <div className="Drawer">
      <header className="Srawer-header">
        test logistics component and some cool features 😎
      </header>
      <img src={pepe} alt="pepe" className="Drawer-img" />
    </div>
  );
}

window.renderLogisticsDrawer = (containerId, history) => {
  ReactDOM.render(
    <Drawer history={history} />,
    document.getElementById(containerId)
  );
  unregister();
}

window.unmountLogisticsDrawer = containerId => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};