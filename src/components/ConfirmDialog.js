// components/ConfirmDialog.js
import React from 'react';

const ConfirmDialog = ({ message, onConfirm }) => {
  return (
    <div>
      <p>{message}</p>
      <button onClick={onConfirm}>Confirm</button>
      <button>Cancel</button>
    </div>
  );
};

export default ConfirmDialog;
