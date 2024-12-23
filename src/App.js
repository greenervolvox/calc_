import React from "react";
import './index.css';
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const handleOnClear = (number) => {
    setCurrentNumber('0')
  }
  const handleAddNumber = (number) => {
    
    setCurrentNumber(prev => `${number}${prev =='0' ? '': prev}`)
  }

  return (
    <div className="Container">
        <div className="Content">
        <Input value={currentNumber}/>
        <div className="Row">
        <Button label="x" />
        <Button label="/" />
        <Button label="C" onClick={handleOnClear} />
        <Button label="--" />
        </div>
        <div className="Row">
        <Button label="7" onClick={() => handleAddNumber('7')}/>
        <Button label="8" onClick={() => handleAddNumber('8')}/>
        <Button label="9" onClick={() => handleAddNumber('9')}/>
        <Button label="-" onClick={() => handleAddNumber('')}/>
        </div>
        <div className="Row">
        <Button label="4" onClick={() => handleAddNumber('4')}/>
        <Button label="5" onClick={() => handleAddNumber('5')}/>
        <Button label="6" onClick={() => handleAddNumber('6')}/>
        <Button label="+" onClick={() => handleAddNumber('')}/>
        </div>
        <div className="Row">
        <Button label="1" onClick={() => handleAddNumber('1')}/>
        <Button label="2" onClick={() => handleAddNumber('2')}/>
        <Button label="3" onClick={() => handleAddNumber('3')}/>
        <Button label="=" onClick={() => handleAddNumber('=')}/>
        </div>
      </div>
   </div>
  );
}

export default App;
