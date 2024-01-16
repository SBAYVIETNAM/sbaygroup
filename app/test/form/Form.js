"use client"
import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";

function Form() {
    const [formData, setFormData] = useState({
        personalInfo: {},
        addressInfo: {},
    });

    const [personalData, setPersonalData] = useState({
        name:{}
    })
    const [personalDataArr, setPersonalDataArr] = useState([])
    let x = []
    const handlePersonalInfoChange = (personalInfo) => {
        console.log('personalInfo', personalInfo);
        x.push({
            name: personalInfo
        })
        console.log('x', x);
        
    };

    const handleAddressInfoChange = (addressInfo) => {
        setFormData({ ...formData, addressInfo });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        console.log('personalDataArr', personalDataArr);
    };

    return (
        <div className="row">
            <div className="col-sm-4">
                <form onSubmit={handleSubmit}>
                    <AddressInfo onChange={handleAddressInfoChange} />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <div className="col-sm-8"></div>
        </div>
    );
}

export default Form;