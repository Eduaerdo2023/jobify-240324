import React from 'react'
import { Form, redirect, useNavigation, Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'


export const action = async ({ request }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  try {
    await customFetch.post('/auth/register', data)
    toast.success('Registration successful')
    return redirect('/login')
  } catch (error) {
   toast.error(error?.response?.data?.msg)
    return error
  }
}

const Register = () => {
  const navigation = useNavigation()
  console.log(navigation);
  const isSubmitting = navigation.state === 'submitting'
  
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>register</h4>
        <FormRow name='name' type='text' id='name' defaultValue='Eduardo' />
        <FormRow name='lastName' type='text' id='lastName' defaultValue='Vasquez' labelText='last name' />
        <FormRow name='location' type='text' id='location' defaultValue='Miami' />
        <FormRow name='email' type='email' id='email' defaultValue='email@email.com' />
        <FormRow name='password' type='password' id='password' defaultValue='secret' />
        
        <button type="submit" className='btn btn-block' disabled={isSubmitting}>{isSubmitting? 'submitting...': 'submit'}</button>
        <p>Al ready a member ?
          <Link to='/login' className='member-btn'>Login </Link>
        </p>

      </Form>

    </Wrapper>
  )
}

export default Register

