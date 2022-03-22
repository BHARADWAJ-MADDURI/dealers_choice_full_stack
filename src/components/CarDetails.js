import React from 'react';

const CarDetails = (props) => {
   
    const selectedCar = props.selectedCar
    console.log(selectedCar);
    return (
        <div>
            <p>Make: {selectedCar.brand.name}</p>
            <p>Model: {selectedCar.name}</p>
            <p>Country: {selectedCar.brand.country}</p>
            <p>Price: {selectedCar.price}</p>
        </div>
    )
}

export default CarDetails;