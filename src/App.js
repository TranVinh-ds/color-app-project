import Square from './components/Square';
import ColorInput from './components/ColorInput';
import { useState } from 'react';
import './App.css';

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
