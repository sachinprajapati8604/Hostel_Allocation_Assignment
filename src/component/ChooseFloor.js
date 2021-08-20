import React, { PureComponent } from 'react'
import './css/ChooseHostel.css';
// import { useHistory } from 'react-router-dom';

const ChooseFloor = () => {
    // let history = useHistory();

    // const redirect = () => {
    //     history.push('/your-path')
    // }

    return (
        <div className="main">
            <h2>Choose a Floor </h2>
            <div className="row">
               <div className="col">1</div>
               <div className="col">2</div>
               <div className="col">3</div>
               <div className="col">4</div>
            </div>
            <div className="row middle-row">
               <div className="col">10</div>
               <div className="col">5</div>
            </div>
            <div className="row">
               <div className="col">9</div>
               <div className="col">8</div>
               <div className="col">7</div>
               <div className="col">6</div>
            </div>

           
         
        </div>
    )

}

export default ChooseFloor;