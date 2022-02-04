import React, {  useState } from 'react';
import './UserDisplay.css';


const UserData = () => {
    const [Age, setAge] = useState(0);
    const [Height, setHeight] = useState(0);
    const [Weight, setWeight] = useState(0);
    const [result, setresult] = useState(0)
    const [message, setMessage] = useState('')
    const handleAge = (e) => {
        setAge(e.target.value);
        console.log(`Age: ${e.target.value}`);

    }
    const handleWeight = (e) => {
        setWeight(e.target.value);

        console.log(`Weight: ${e.target.value}`);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);

        console.log(`Height: ${e.target.value}`);
    }
    const computebmi = function () {
        let bmi = (parseFloat(Weight) / parseFloat(Height) / parseFloat(Height)) * 703;
        setresult(bmi.toFixed(2));

        if (bmi < 18.5) {
            return setMessage("Slightly Underweight");
        }
        if (bmi >= 18.5 && bmi < 22) {
            return setMessage("The Ideal weight");
        }
        if (bmi >= 22 && bmi < 24.9) {
            return setMessage("of Normal weight");
        }
        if (bmi >= 25 && bmi < 29.9) {
            return setMessage("Overweight");
        }
        if (bmi >= 30) {
            return setMessage("Simply Obese");
        }
    }
    const ClearData = function () {
        setAge(0);
        setHeight(0);
        setWeight(0);
        setresult(0);
    }
    return (

        <div className={'form'}>

            <label className='input'>Age</label>
            <div className={'input'}>
                <input
                    type="number"
                    placeholder="Enter Age"
                    value={Age}
                    name="age"
                    onChange={handleAge}>
                </input>
            </div>
            <label className='label'>Height</label>
            <div className={'input'}>

                <input
                    type="number"
                    placeholder="Enter Height in inches"
                    value={Height}
                    name="Height"
                    onChange={handleHeight}>
                </input>
            </div>
            <label className='label'>Weight</label>
            <div className={'input'}>
                <input type="number"
                    placeholder="Enter Weight in lbs"
                    value={Weight}
                    name="Weight"
                    onChange={handleWeight}>
                </input>
            </div>
            <button type="Submit" onClick={computebmi}> Submit</button>
            <button type="Clear" onClick={ClearData}> Clear Data</button>
            <div className={'message'}>
                <span>Your current BMI: {result}</span>
            </div>
            <div className={'message'}>
                <span>We think you are : {message}</span>
            </div>
        </div>

    );

}
export default UserData;
