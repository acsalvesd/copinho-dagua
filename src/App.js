import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGlassWaterDroplet} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

//console.log(water);

function App() {
  const [ml, setMl] = useState('');
  const [message, setMess] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log()

    setMess(`${ml}ml`);
    setMl('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h4>Copinho d'agua</h4>
        <FontAwesomeIcon icon={faGlassWaterDroplet} className='App-water'/>
        <form className='form-copo' onSubmit={handleSubmit}>
          <input 
          type="text" 
          id="ml" 
          name="name" 
          value="" 
          className='btn-ml' 
          placeholder='Digite o ml do copo'
          onChange={(e) => 
            setMl(e.target.value)
            }
          />
          <input 
          type="submit" 
          value="Registrar" 
          className='btn-submit'/>
        </form>
        <div className='qtd-copo'>
          <span className='span-copo'>{message}</span>
        </div>
      </header>
    </div>
  );
}

/*
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
*/

/* --------- 
Adding styles 
In React, you specify a CSS class with className
*/


export default App;
