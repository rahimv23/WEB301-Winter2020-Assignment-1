import React, { useState } from 'react';
import './App.css';

import Number from './Components/Number/Number';
import CaretButton from './components/CaretButton/CaretButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="text-center">Counter Application</h1>
      <div className="row">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => setCount(count - 1)}>
            <i class="material-icons">
              keyboard_arrow_left
            </i>
          </CaretButton>
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Number count={count} />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => {
            console.log('other thing');
            return setCount(count + 1);
          }}>
            <i class="material-icons">
              keyboard_arrow_right
            </i>
          </CaretButton>
        </div>
      </div>
    </div>
  );
}

export default App;


<div className="container">
      <nav class="navbar navbar-dark bg-primary">
  <span class="navbar-brand mb-0 h1"><span className="navbar-toggler-icon"></span>COUNTERAPP</span>
</nav>
      
    <div className="row row-cols-1 row-cols-md-2">

    <div class="col mb-4">
    <div class="card">
  <div class="card-body">
  <div className="col-4 d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => setCount(count - 1)}>
            <i class="material-icons">
              keyboard_arrow_up
            </i>
          </CaretButton>
        </div>
  </div>
</div> 
    </div>
    

    </div>  

    </div>
