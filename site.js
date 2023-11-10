// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

import React, { useState } from 'react';

function InteractiveComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Contagem de Jogos</h2>
      <p>Contagem: {count}</p>
      <button onClick={incrementCount}>Incrementar</button>
    </div>
  );
}

export default InteractiveComponent;
