import React from 'react';
import Home from './view/Home'

const App: React.FC = () => {
  fetch(process.env.REACT_APP_API_URL || 'http://localhost:8080/api/v1')
    .then(() => console.log('nois'))
    .catch(() => console.log('fudeu'))
  return <Home />;
    
}

export default App;
