import React, { useState } from 'react';
import './App.css';

import Number from './Components/Number/Number';
import CaretButton from './Components/Button/CaretButton';
import positiveNumber from './Components/Functions/PositiveNumber';

import inventory from './Components/Form Fields/InventoryInput';
import InventoryField from './Components/Form Fields/InventoryField';
import Table from './Components/DataTable/Table';
import Snackbar from './Components/SnackBar/SnackBar';

function App() {
  const [count, setCount] = useState(0);
  
  /*
  const positiveNumber = useState(false);

    if (count == 0) {
      return { positiveNumber };
    }
    
  };
    
  */
  
  return (
    <div className="container">
      <nav class="navbar navbar-dark bg-primary">
  <span class="navbar-brand mb-0 h1"><span className="navbar-toggler-icon"></span>COUNTERAPP</span>
</nav>
      
    <div className="row row-cols-md-2">
    <div class="col mb-4">
    <div class="card m-3">
    <div class="card-body">

    
    
    
  
        <div className="d-flex justify-content-center align-items-center">
          <CaretButton handleClick={() => setCount(count + 1)}>
            <i class="material-icons">
              keyboard_arrow_up
            </i>
          </CaretButton>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Number count={count} />
        </div>
        
        
        <div className="d-flex justify-content-center align-items-center">
        
        <div>
          {positiveNumber ? (
            <CaretButton handleClick={() => {
              if (count > 0) {
              return setCount(count - 1);
              }
            }}>
              <i class="material-icons">
                keyboard_arrow_down
              </i>
        </CaretButton>
          ) : " "}
        

        </div>
        

          
        </div>
      </div>
    </div>

    
    <div className="card m-3">
    <div className="card-body">

        <InventoryField  />    
    
    </div>
    </div>
      
    
    
    <div class="col mb-4">
            <Table />

            <Snackbar />
    
    </div>
    
    </div>
            
    

  </div>  
</div>  
  );
}

export default App;