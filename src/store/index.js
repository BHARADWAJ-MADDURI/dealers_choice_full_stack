import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const reducer = (state = {cars: [], selectedCar: {} }, action) => {
    console.log(action);
    switch(action.type) {
        case 'LOAD_CARS':
            state= {
                ...state, cars: action.cars
            }
        case 'SELECTED_CAR':
            state = {
                ...state, 
                selectedCar: action.car
            }
        case 'DELETE_CAR':
            const cars = state.cars.filter(car => car.id !== action.car);
            state ={
                ...state, cars
            }
    }
    return state;
}

export const loadCars = () => {
    return async(dispatch) => {
        const cars = (await axios.get('/api/cars')).data;
        dispatch({type: 'LOAD_CARS', cars});
    }
}

export const selectCar = () => {
    return async(dispatch) => {
        const response = await axios.get(`/api/cars/${carId}`);
        const car = response.data;
        dispatch({type: 'SELECTED_CAR' ,car});
    }
}

export const deleteCar = (car) => {
    return async(dispatch) => {
        await axios.get(`/api/cars/${car.id}`);
        
        dispatch({type: 'DELETE_CAR', car});
    }
}


const store = createStore(reducer, applyMiddleware(thunk));

export default store;