import React from 'react';

const Table = (props) => {
    const { data } = props;
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Inventory Item</th>
                        <th>Quantity</th>                        
                    </tr>
                </thead>

                <tbody>
          {data.map(({item}) => {
            return (
              <tr key={item.id}>
                <td>{item}</td>
                
                
              </tr>
            );
          })}
        </tbody>

            </table>

        </div>
    )

}

export default Table;