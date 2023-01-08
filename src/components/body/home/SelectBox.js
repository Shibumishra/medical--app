import React from 'react'
import Select from 'react-select'

const options = [
    { value: 'Fitness', label: 'Fitness' },
    { value: 'Doctors', label: 'Doctors' },
    { value: 'Hospitals', label: 'Hospitals' }
]

const SelectBox = () => {
    return (
        <div className='input_box-form-select'>
            <Select options={options} />
        </div>
    )
}

export default SelectBox;