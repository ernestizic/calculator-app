import React from 'react';
import { Dashboard } from './components/Dashboard';
import ThemeContextProvider from './contexts/ThemeContext'


function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Dashboard />
      </div>
    </ThemeContextProvider>
      
    
  );
}

export default App;
