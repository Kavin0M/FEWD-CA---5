import {Formik, Form, Field, ErrorMessage} from 'formik'
import { useState } from 'react'
import {Link} from 'react-router-dom'


function FormWindow(props) {

    const [submit,setSubmit] = useState(false)
    const [change,setChange] = useState(false)

    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const handleValidate = (values) => {
        const errors = {}

        if (!values.username){
            errors.username = "Required"
        }

        if (!values.email){
            errors.email = "Required"
        }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = "Enter a valid email"
        }

        if (!values.password){
            errors.password = "Required"
        }
        else if (values.password.length < 4){
            errors.password = "Password length should be greater than 4"
        }
        else if (values.password.length > 20){
            errors.password = "Password lenght should be less than 20"
        }

        if (!values.confirmPassword){
            errors.confirmPassword = "Required"
        }
        else if (values.confirmPassword !== values.password){
            errors.confirmPassword = "Password are not matching"
        }

        return errors
    }

    const handleSubmit = (values) => {
        alert(`Welcome ${values.username} to Kalvium Books`)
        props.onRegister(values.username)
        setSubmit(true)
        setChange(true)
    }

  return (
        <div id="form-container">
            <h1>CREATE ACCOUNT</h1>
            {submit && <div id="success">Registered Successfully</div>}
            <Formik initialValues={initialValues} validate={values => handleValidate(values)} onSubmit={values => handleSubmit(values)}>
                <Form>
                    <div className="name">
                        <Field type="text" name="username" placeholder="Enter username"/>
                        <ErrorMessage name="username" component="div" className='error'/>
                    </div>
                    <div className="email">
                        <Field type="text" name="email" placeholder="Enter email"/>
                        <ErrorMessage name="email" component="div" className='error'/>
                    </div>
                    <div className="password">
                        <Field type="password" name="password" placeholder="Enter password"/>
                        <ErrorMessage name="password" component="div" className='error'/>
                    </div>
                    <div className="confirm-password">
                        <Field type="text" name="confirmPassword" placeholder="Re-enter password"/>
                        <ErrorMessage name="confirmPassword" component="div" className='error'/>
                    </div>
                    
                    {change ? <Link to='/'><button type='submit'>Return to home</button></Link> : <button type='submit'>Register</button>}
                </Form>
            </Formik>
        </div>
  )
}

export default FormWindow