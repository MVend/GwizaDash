import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { authenticateUser } from '../redux/auth';
import { Formik } from 'formik';
import { unwrapResult } from '@reduxjs/toolkit';
import { getLoggedUserInfo } from '../utils/helpers';


const Login = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state?.auth)

    useEffect(()=> {
      if(data?.data?.token){
        const userInfo = getLoggedUserInfo()
        // Call Menu APi and redirect to a page
        console.log(userInfo, "=========<")
      }
    }, [data?.data?.token])

    return(
        <div>
        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ username: '', password: '' }}
          validate={values => {
            const errors = {};
            if (!values.username) {
              errors.username = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]/i.test(values.username)
            ) {
              errors.username = 'Username address';
            }
            return errors;
          }}
          onSubmit={async(values, { setSubmitting }) => {


            // dispatch(authenticateUser({values}))
            await dispatch(authenticateUser({values}))
     
            // setTimeout(() => {
            //   alert(JSON.stringify(values, null, 2));
            //   setSubmitting(false);
            // }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">username</label>
              <input
                type="username"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <br />
              {errors.username && touched.username && errors.username}
              <label htmlFor="passw"></label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <br />
              <button type="submit" >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    )
}

export default Login;