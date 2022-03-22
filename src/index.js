import React, {Component} from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {connect, Provider} from 'react-redux'
import store, { loadCars, selectCar, deleteCar} from './store';
import CarsList from './components/CarsList';
import CarDetails from './components/CarDetails';


class _App extends Component {
    constructor(){
        super();
        this.state = {
            selectedCar: {}
        }
        this.selectCar = this.selectCar.bind(this);
    }

    async componentDidMount(){
        this.props.loadCars();
    }

    async selectCar(carId) {
        const response = await axios.get(`/api/cars/${carId}`);
        const car = response.data;
        //this.props.selectCar();
        this.setState({selectedCar: car});
    }

    async destroy(car) {
        // await axios.delete(`/api/cars/${car.id}`)
        // const cars = this.state.cars.filter(_car => _car.id !== car.id);
        // this.setState({cars});
        this.props.deleteCar();
    }

    render(){
        const cars = this.props.cars;
        const selectCar = this.selectCar;
        const selectedCar = this.props.selectedCar;
        return (
            <div>
              <h1>My Favorite Cars</h1>
              { this.state.selectedCar.id ? 
              <CarDetails selectedCar = {this.state.selectedCar} />:
              <CarsList cars = {cars} selectCar = {selectCar}/> 
              }
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadCars: () => {
            dispatch(loadCars());
        },
        selectCar: () => {
            dispatch(selectCar());
        },
        deleteCar: (car)  => {
            dispatch(deleteCar(car));
        }
    }
}

const App = connect(state => state, mapDispatchToProps)(_App);

render(
<Provider store={store}>
    <App />
</Provider>, 
document.querySelector('#root'));