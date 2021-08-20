import React, { PureComponent } from 'react'
import './css/ChooseHostel.css';
// import { useHistory } from 'react-router-dom';

const ChooseHostel = () => {
    // let history = useHistory();

    // const redirect = () => {
    //     history.push('/your-path')
    // }

    return (
        <div className="main">
            <h2>Choose Your Hostel</h2>
            <div className="row">
                <div className="col girl" > <div className="female-img"> </div> Girls Hostel</div>
                <div className="col boy"> <div className="male-img"> </div>  Boys Hostel</div>
            </div>

           <div className="hostel-box">
               <h2>Choose a hostel</h2>
           <div className="row myrow">
                <div className="col"> B1 </div>
                <div className="col">  B2 </div>
                <div className="col">  B3 </div>
                <div className="col">  B4 </div>
                <div className="col">  B5 </div>
                <div className="col">  B6 </div>
            </div>
           </div>
        </div>
    )

}

export default ChooseHostel;