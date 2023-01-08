import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

const options = [
    { value: 'Dr. Captain V S Singh', label: 'Dr. Captain V S Singh' },
    { value: 'Star Hospital', label: 'Star Hospital' },
    { value: 'Adarsh Uro Laparoscopy Hospital and Stone Centre', label: 'Adarsh Uro Laparoscopy Hospital and Stone Centre' },
    { value: 'C S N Eye Hospital', label: 'C S N Eye Hospital' },
    { value: 'Khajpura', label: 'Khajpura' },
    { value: 'Ayush Hospital', label: 'Ayush Hospital' },
    { value: 'CHANAKYA HOSPITAL', label: 'CHANAKYA HOSPITAL' },
    { value: 'Samay Hospital', label: 'Samay Hospital' },
    { value: 'City Hospital', label: 'City Hospital' },
    { value: 'New Max Care Hospital', label: 'New Max Care Hospital' },
    { value: 'Arohi Hospital', label: 'Arohi Hospital' },
    { value: 'Hi Tech Emergency Hospital', label: 'Hi Tech Emergency Hospital' },
    { value: 'Harsh Clinic & Hospital', label: 'Harsh Clinic & Hospital' },
    { value: 'AIIMS Patna', label: 'AIIMS Patna' },
    { value: 'Heart Hospital', label: 'Heart Hospital' },
    { value: 'Tripolia Hospital', label: 'Tripolia Hospital' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Hospital', label: 'Hospital' },
    { value: 'Kankarbagh Hospital', label: 'Kankarbagh Hospital' },
    { value: 'Patna Hospital', label: 'Patna Hospital' },
    { value: 'Aadhvik Hospital', label: 'Aadhvik Hospital' },
    { value: 'Holy Promise Hospital', label: 'Holy Promise Hospital' },
    { value: 'Chanakya Hospital', label: 'Chanakya Hospital' },
    { value: 'Satyam Hospital', label: 'Satyam Hospital' },
    { value: 'Udayan Hospital', label: 'Udayan Hospital' },
    { value: 'Shiva Hospital', label: 'Shiva Hospital' },
    { value: 'Vatsalya Mamta Fertility Centre', label: 'Vatsalya Mamta Fertility Centre' },
    { value: 'Apollo Trauma Center Hospital', label: 'Apollo Trauma Center Hospital' },
    { value: 'Anandita Hospital', label: 'Anandita Hospital' },
]

export default class DoctorSelect extends Component {
    handleChange = (
        newValue,
        actionMeta
    ) => {
        console.group('Value Changed');
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };
    render() {
        return (
            <div className='input-box_select'>
                <CreatableSelect
                    isClearable
                    placeholder="Search by Name of Doctor"
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                    options={options}
                />
            </div>
        );
    }
}