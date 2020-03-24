import React, { useState } from 'react';
import './InventoryField.css';

import Input from '../Input/Input';

const InventoryField = (props) => {
    //const [item, setItem] = useState('');

    const [itemError, setItemError] = useState(null);
    const { onChange, item, query } = props;
        
    const handleSubmit = () => {
        

        if (item === '') {
            // Create an error
            setItemError('This field is required');
        } else {
            setItemError(null);
        }

        const data = {
            item,
        }
        
    };

    return (
        <div className="inventoryField">
            
            <div className="form-inline">
                <div className="col-8">
                    <div className="form-group form-horizontal">
                        <label htmlFor="item inlineFormInput" nameClass="sr-only" ></label>
                        <Input
                            type="text"
                            id="item"
                            className="form-control mb-2" id="inlineFormInput"
                            placeholder="Name"
                            value={item}
                            onChange={(event) => {
                                item(event.target.value);
                            }}
                        />
                        
                        <div className="errorMessage">{itemError}</div>
                        
                    </div>
                    
                    
                    
                    
                </div>
                <div class="col-4">
                        
                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                            onClick={handleSubmit}
                        >
                            Save
                        </button>
                        
                        </div>
            </div>
            
        </div>
    );
}

<InventoryField item={item} onChange={(e) => setQuery(e.target.value)} />

export default InventoryField;