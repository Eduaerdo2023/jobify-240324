import React from 'react'
import { Link, Form, redirect, useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo, SubmitBtn } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'

export const action = async({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch.post('auth/login', data)
    toast.success('Login successful')
    return redirect('/dashboard')
  } catch (error) {
    toast.error(error?.response?.data?.msg)
    return error
  }
}

const Login = () => {
  const navigate =  useNavigate()
  const loginDemoUser =async() => {
    const data = {
      email: 'test@test.com',
      password: 'secret123'
    }
    try {
      await customFetch.post('auth/login', data)
      toast.success('Take a test drive')
      navigate('/dashboard')
    } catch (error) {
      toast.error(error?.response?.data?.msg)
    }
    
  }
  return (
    <Wrapper>
      <Form className='form' method='post'>
        <Logo />
        <h4>login</h4>
        <FormRow name='email' type='email' id='email' />
        <FormRow name='password' type='password' id='password'  />
        <SubmitBtn />
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>explore the app</button>
        <p>Not a member yet? <Link  className='member-btn' to='/register'>Register</Link></p>
      </Form>
    </Wrapper>
  )
}

export default Login
