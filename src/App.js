import React, { useState } from 'react';


function App() {
    const [display, setDisplay] = useState('');
    const [result,setResult] = useState('');

    const appendToDisplay = value => {
        setDisplay(prevDisplay => prevDisplay + value);
    };

    const clearDisplay = () => {
        setResult('');
        setDisplay("")
    };

    const calculate = () => {
        let resultt;
       
            if (display.trim() === '') {
                setResult("Error")
            }
            resultt = eval(display);
            if (!isFinite(resultt)) {
                setResult("Infinity")
            }
            if (isNaN(resultt)) {
                setResult("NaN")
            }
            setResult(resultt.toString());
        
    };

    return (
        <div className="calculator">
          <h1>React Calculator</h1>
            <input type="text" value={display} readOnly />
            <br />
            <span>{result}</span>
            <br/>
            <button onClick={() => appendToDisplay('7')}>7</button>
            <button onClick={() => appendToDisplay('8')}>8</button>
            <button onClick={() => appendToDisplay('9')}>9</button>
            <button onClick={() => appendToDisplay('+')}>+</button>
            <br />
            <button onClick={() => appendToDisplay('4')}>4</button>
            <button onClick={() => appendToDisplay('5')}>5</button>
            <button onClick={() => appendToDisplay('6')}>6</button>
            <button onClick={() => appendToDisplay('-')}>-</button>
            <br />
            <button onClick={() => appendToDisplay('1')}>1</button>
            <button onClick={() => appendToDisplay('2')}>2</button>
            <button onClick={() => appendToDisplay('3')}>3</button>
            <button onClick={() => appendToDisplay('*')}>*</button>
            <br />
            <button onClick={clearDisplay}>C</button>
            <button onClick={() => appendToDisplay('0')}>0</button>
            <button onClick={calculate}>=</button>
            <button onClick={() => appendToDisplay('/')}>/</button>
            <br />
            
        </div>
    );
}

export default App;

