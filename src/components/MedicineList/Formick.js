import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const Formick = () => {

    const initialValues = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        termAndConditions: false
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        gender: Yup.string().oneOf(["male", "female"], "Required").required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid phone number").required("Redured"),
        password: Yup.string().min(8, "Password min length should be 8").required("Required"),
        confirmPassword: Yup.string().oneOf([Yup.ref('password')], "Password not Matched").required("Required"),
        termAndConditions: Yup.string().oneOf(["true"], "Accept terms & conditions")
    })

    const onSubmit = (values, props) => {
        console.log(values)
        localStorage.setItem('UserData', JSON.stringify(values));
        setTimeout(() => {
            props.resetForm()
            props.setSubmitting(false)
        }, 2000)
    }

    return (
        <div className="name_address">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(props) => (
                    <Form>
                        <div className="first_lastName">
                            <Field as={TextField} label='Name' name="firstName"
                                placeholder="Enter you First Name" type="text" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} label='Email' name="lastName" type="text"
                                placeholder="Enter you Last Name" helperText={<ErrorMessage name="email" />} />
                        </div>

                        <div className="address">

                        </div>
                        <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                        <Field as={TextField} label='Phone Number' name="phoneNumber" type="number"
                            placeholder="Enter you phnon no." helperText={<ErrorMessage name="phoneNumber" />} />
                        <Field as={TextField} label='Password' name="password" type="password"
                            placeholder="Enter password" helperText={<ErrorMessage name="password" />} />
                        <Field as={TextField} label='Confirm Password' name="confirmPassword" type="password"
                            placeholder="Conform password" helperText={<ErrorMessage name="confirmPassword" />} />
                        <FormControlLabel
                            control={
                                <Field as={Checkbox}
                                    name="termAndConditions"
                                    color="secondary"
                                />
                            }
                            label="I accept the terms and conditions."
                        />
                        <FormHelperText><ErrorMessage name="termAndConditions" /></FormHelperText>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={props.isSubmitting}
                        >{props.isSubmitting ? "Loading" : "Sign Up"}</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Formick