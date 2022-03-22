import React from "react";
import CarsRow from './CarsRow'

const CarsList = (props) => {
    const cars = props.cars;
    const selectCar = props.selectCar;
    return (
       <table>
            <tbody>
                <tr>
                    <th>List of my Fav CARS</th>
                    <th>Remove from my list</th>
                </tr>  
                {cars.map((car) => {
                    return (
                        <CarsRow key = {car.id} car = {car} selectCar = {selectCar}/>
                    );
                })}
            </tbody>
        </table>
    )
}

export default CarsList;