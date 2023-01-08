import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AiFillPhone } from 'react-icons/ai';
import { CssBaseline, Grid } from '@material-ui/core';
import GoogleMap from '../GoogleMap/index';
import { getPlacesData } from '../Api';

function BookNow() {
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState({});
    const [chieldClicked, setChieldClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoordinates({ lat: latitude, lng: longitude });
        })
    }, []);


    useEffect(() => {
        setIsLoading(true);
        getPlacesData(bounds?.sw, bounds?.ne)
            .then((data) => {
                setPlaces(data);
                setIsLoading(false);
            })
    }, [coordinates, bounds]);


    return (
        <div>
            <GoogleMap />
        </div>
    );
}

export default BookNow;
