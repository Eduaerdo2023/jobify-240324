import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'

import { FormRow, Logo } from '../components'

const Login = () => {
  return (
    <Wrapper>
      <form className='form'>
        <Logo />
        <h4>login</h4>
        <FormRow name='email' type='email' id='email' defaultValue='email@email.com' />
        <FormRow name='password' type='password' id='password' defaultValue='secret' />
        <button type="submit" className='btn btn-block'>submit</button>
        <button type='button' className='btn btn-block'>explore the app</button>
        <p>Not a member yet? <Link  className='member-btn' to='/register' >Register</Link></p>
        
      </form>
    </Wrapper>
  )
}

export default Login
