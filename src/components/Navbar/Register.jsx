import React from 'react';
import './register.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function register() {
  return (
    <Popup
    trigger={<button className="button"> Sign Up </button>}
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> Register </div>
        <div className="content">
          {' '}
          <input placeholder='NAME'/>
          <input placeholder='EMAIL'/>
          <button>CREATE ACCOUNT</button>
        </div>
        <div className="actions">
          <Popup
            trigger={<button className="button"> More info</button>}
            position="top center"
            nested
          >
            <span>
            Before accepting it is recommended to read the privacy policy.
            </span>
          </Popup>
          <button
            className="button"
            onClick={() => {
              console.log('modal closed ');
              close();
            }}
          >
            Exit
          </button>
        </div>
      </div>
    )}
  </Popup>
  )
}
