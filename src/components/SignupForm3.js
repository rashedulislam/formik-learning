import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';


const SignupForm = () => {

  return (

    <Formik
       initialValues={{ firstName: '', lastName: '', email: '' }}
       validationSchema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().email('Invalid email address').required('Required'),
       })}
       onSubmit= {(values) => {
          console.log('Form Values',values);
       }}
     >
    {formik => (
        <form onSubmit={formik.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
            id="firstName"
            name="firstName"
            type="text"
            {...formik.getFieldProps('firstName')}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
        ) : null}
    
        <label htmlFor="lastName">Last Name</label>
        <input
            id="lastName"
            name="lastName"
            type="text"
            {...formik.getFieldProps('lastName')}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
        ) : null}
    
        <label htmlFor="email">Email Address</label>
        <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
        />
        {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
        ) : null}
    
        <button type="submit">Submit</button>
        </form>
       )}
       </Formik>
     );
   };

export default SignupForm;