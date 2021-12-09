import React from 'react';
import ReactDOM from 'react-dom';
import './Component.css';

const Drawer = () => {
  return (
    <div className="Drawer">
      <header className="Srawer-header">
        test logistics component and some cool features 😎
      </header>
    </div>
  );
}

ReactDOM.render(<Drawer />, document.querySelector('#root'));