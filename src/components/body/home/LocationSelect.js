import React, { Component } from 'react';

import CreatableSelect from 'react-select/creatable';
import { ActionMeta, OnChangeValue } from 'react-select';

const options = [
    { value: 'Kankarbagh', label: 'Kankarbagh' },
    { value: 'Gulzarbagh', label: 'Gulzarbagh' },
    { value: 'Patna', label: 'Patna' },
    { value: 'Saguna More', label: 'Saguna More' },
    { value: '70 Feet Road-beur', label: '70 Feet Road-beur' },
    { value: 'Saguna More', label: 'Saguna More' },
    { value: 'Phulwarisharif', label: 'Phulwarisharif' },
    { value: 'Sheikhpura', label: 'Sheikhpura' },
    { value: 'Boring Road', label: 'Boring Road' },
    { value: 'Shivpuri Patna', label: 'Shivpuri Patna' },
    { value: 'Patliputra Colony', label: 'Patliputra Colony' },
    { value: 'Rajendra Nagar', label: 'Rajendra Nagar' }
]

export default class LocationSelect extends Component {
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
                    placeholder="Location"
                    onChange={this.handleChange}
                    onInputChange={this.handleInputChange}
                    options={options}
                />
            </div>
        );
    }
}