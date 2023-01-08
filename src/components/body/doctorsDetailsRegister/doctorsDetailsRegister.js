import React, { useState, useEffect } from 'react'
import {
    Grid,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    Button,
    CardHeader,
    FormControl,
    Paper,
    Avatar,
    Typography,
} from "@material-ui/core"
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

import { Formik, Form, Field } from "formik";
import * as Yup from "yup"
import { TextField } from "formik-material-ui";
import CountrySelect from "../../CountrySelect";
import DatePickers from "../../Date";
import { Redirect } from 'react-router-dom';
import axios from 'axios';

const allSpecialization = "retail/doctorSpecializaton/getAllSpecializatons";
const allHospitals = "retail/hospitals/getAllHospitals";
const allServices = "retail/doctorService/getAllServices";

const doctorDetealPostApi = "retail/register/addDoctorDetails";
const hospitalPostApi = "retail/hospitals/addHospital";
const servicpostApi = "retail/doctorService/addService";
const specializationPostApi = "retail/doctorSpecializaton/addSpecialization";


const initialValues = {
    firstName: "",
    lastName: "",
    specialization: "",
    hospitals: "",
    services: "",
    city: "",
    country: "",
    fee: "",
}

const options = [
    { label: "Family Medicine", value: "Family Medicine" },
    { label: "Marine Medicine", value: "Marine Medicine" },
    { label: "Palliative Medicine", value: "Palliative Medicine" },
    { label: "Obstetrics & Gynaecology", value: "Obstetrics & Gynaecology" },
    { label: "General Surgery", value: "General Surgery" },
]

//password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/



function DoctorsDetailsRegister() {
    const [Specialization, setAllSpecialization] = useState([]);
    const [Hospitals, setAllHospitals] = useState([]);
    const [Services, setAllServices] = useState([]);
    const [login, setLogin] = useState(false)

    const avatarStyle = { backgroundColor: '#1bbd7e', marginTop: 20 }


    useEffect(() => {
        async function getUser() {
            try {
                const response = await axios.get(allSpecialization);
                const data = response.data.result
                console.log("allSpecialization", data)
                setAllSpecialization(data)
            } catch (error) {
                console.error(error);
            }
        }
        getUser()
    }, []);

    useEffect(() => {
        async function getHop() {
            try {
                const response = await axios.get(allHospitals);
                const data = response.data
                console.log(data)
                setAllHospitals(data.result)
            } catch (error) {
                console.error(error);
            }
        }
        getHop()
    }, []);

    useEffect(() => {
        async function getSer() {
            try {
                const response = await axios.get(allServices);
                const data = response.data.result
                console.log(data)
                setAllServices(data)
            } catch (error) {
                console.error(error);
            }
        }
        getSer()
    }, []);


    const onSubmit = (values) => {
        console.log(values)
        axios.post(doctorDetealPostApi, {
            fee: values.fee,
            master_service_id: values.services.master_service_id,
            master_hospital_id: values.Hospitals.master_hospital_id,
            master_specialization_id: values.specializations.master_specialization_id
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.post(specializationPostApi, {
            specialization_name: values.specializations.specialization_name,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.post(hospitalPostApi, {
            hospital_name: values.Hospitals.hospital_name,
            hospital_address: values.Hospitals.hospital_address,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.post(servicpostApi, {
            service_name: values.services.service_name,
            service_description: values.services.service_description,
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (<>
     {login && <Redirect to="/login" />} 
        <Grid container justify="center" spacing={1} style={{ marginTop: "100px" }}>
            <Grid item md={6}>
                <Card >
                    <Grid align="center">
                        <Avatar style={avatarStyle}>
                            <AddCircleOutlineOutlinedIcon />
                        </Avatar>
                        <Typography variant="caption">Please fill this all Deteals!</Typography>
                    </Grid>
                    <ul>
                        <li>
                            {Hospitals.length && Hospitals.map(({ Hospitals }) =>
                            
                                (
                                    <p>{Hospitals.hospital_name}</p>
                                )
                           
                            )}
                        </li>
                    </ul>
                    <Formik
                        initialValues={initialValues}
                        // validationSchema={validationSchema}
                        onSubmit={onSubmit}>
                        {({ dirty, isValid, values, handleChange, handleBlur }) => {
                            return (
                                <Form>
                                    <CardContent>
                                        <Grid item container spacing={1} justify="center">
                                            <Grid item xs={12} sm={6} md={12}>
                                                <Field
                                                    label="Full Name"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="fullName"
                                                    value={values.fullName}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={12}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                        Specialization
                                                    </InputLabel>

                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Specialization"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.specialization}
                                                        name="specialization">
                                                        <MenuItem>None</MenuItem>
                                                        {Specialization.length && Specialization.map(({ specializations }) => (
                                                            <MenuItem key={specializations.master_specialization_id} value={specializations.specialization_name}>
                                                                {specializations.specialization_name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                        Hospitals
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Hospital"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.hospital}
                                                        name="hospital">
                                                        <MenuItem>None</MenuItem>
                                                        {Hospitals.length && Hospitals.map(({ Hospitals }) => (
                                                            <MenuItem key={Hospitals.master_hospital_id} value={Hospitals.hospital_name}>
                                                                {Hospitals.hospital_name}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                       Hospital address
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Hospital"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.hospital}
                                                        name="hospital">
                                                        <MenuItem>None</MenuItem>
                                                        {Hospitals.length && Hospitals.map(({ Hospitals }) => (
                                                            <MenuItem key={Hospitals.master_hospital_id} value={Hospitals.hospital_address}>
                                                                {Hospitals.hospital_address}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={12}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                        Services
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Services"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.services}
                                                        name="services">
                                                        <MenuItem>None</MenuItem>
                                                        {Services.length && Services.map(({ services }) => (
                                                           
                                                            <MenuItem key={services.master_service_id} value={services.service_name}>
                                                                {services.service_name}
                                                            </MenuItem>
                                                            
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <FormControl fullWidth variant="outlined">
                                                    <InputLabel id="demo-simple-select-outlined-label">
                                                    Service description
                                                    </InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-outlined-label"
                                                        id="demo-simple-select-outlined"
                                                        label="Services"
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        value={values.services}
                                                        name="services">
                                                        <MenuItem>None</MenuItem>
                                                        {Services.length && Services.map(({ services }) => (
                                                            
                                                            <MenuItem key={services.master_service_id} value={services.service_description}>
                                                                {services.service_description}
                                                            </MenuItem>
                                                           
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="fee"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="fee"
                                                    value={values.fee}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <Field
                                                    label="City"
                                                    variant="outlined"
                                                    fullWidth
                                                    name="city"
                                                    value={values.city}
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <CountrySelect />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={6}>
                                                <lable style={{fontSize: "15px"}}>Upload your medical ID:</lable>
                                                <Field
                                                    name="upload-photo"
                                                    type="file"
                                                    variant="outlined"
                                                    fullWidth
                                                    component={TextField}
                                                />
                                                {/* <DatePickers /> */}
                                            </Grid>

                                            <Grid item xs={12} sm={6} md={6}>
                                                <lable style={{fontSize: "15px"}}>Upload your personal photo:</lable>
                                                <Field
                                                    name="upload-photo"
                                                    type="file"
                                                    variant="outlined"
                                                    fullWidth
                                                    component={TextField}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6} md={12}>
                                                <lable style={{fontSize: "15px"}}>Please fill date</lable>
                                                <DatePickers />
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                    <CardActions>

                                        <Button type="submit"
                                            fullWidth
                                            variant="contained"
                                            color="primary"
                                            type="Submit"
                                            onClick={() => {
                                                setLogin(true)
                                            }}
                                        >
                                            Submit Now
                                        </Button>
                                    </CardActions>
                                </Form>
                            )
                        }}
                    </Formik>
                </Card>
            </Grid>
        </Grid>
        </>
    )
}

export default DoctorsDetailsRegister;
