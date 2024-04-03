import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'



const Register = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h3>register</h3>
        <FormRow name='name' type='text' id='name' defaultValue='Eduardo' />
        <FormRow name='lastName' type='text' id='lastName' defaultValue='Vasquez'labelText= 'last name'/>
        <FormRow name='location' type='text' id='location' defaultValue='Miami' />
        <FormRow name='email' type='email' id='email' defaultValue='email@email.com' />
        <FormRow name='password' type='password' id='password' defaultValue='secret'/>
        <button type="submit" className='btn btn-block'>submit</button>
      </form>

      <Link to='/login' >Login Page</Link>
    </Wrapper>
  )
}

export default Register

