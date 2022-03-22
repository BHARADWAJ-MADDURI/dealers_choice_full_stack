import React from 'react';

const CarsRow = (props) => {
    const car = props.car;
    const selectCar = props.selectCar;
    return (
        <tr  key = {car.id}>
            <td onClick ={ ()  =>selectCar(car.id) }><a>{car.name  }</a></td>
            <td><button onClick={ () => this.destroy(car)}> Remove </button></td>
        </tr>
    )
}

export default CarsRow;