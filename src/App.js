import Square from './components/Square';
import ColorInput from './components/ColorInput';
import { useState } from 'react';
import './App.css';

function App() {
  const [colorValue, setColorValue] = useState('');
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <ColorInput colorValue={colorValue} setColorValue={setColorValue} />
    </div>
  );
}

export default App;
