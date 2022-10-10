import Square from './components/Square';
import ColorInput from './components/ColorInput';
import { useState } from 'react';
import './App.css';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  return (
    <div className="App">
      <Square colorValue={colorValue} hexValue={hexValue} />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
}

export default App;
