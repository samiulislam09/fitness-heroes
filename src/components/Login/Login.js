import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';
import Loading from '../Loading/Loading';

function Login() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname || '/'

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  if(user){
    navigate(from, {replace:true});
  }
  if(loading){
    return <Loading></Loading>
  }

  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value
    signInWithEmailAndPassword(email, password)
  }

  const navigateRegiater = event =>{
    navigate('/register')
  }


  return (
    <div className='container w-50 mx-auto'>
      <h2>Login</h2>
      
      <Form className='text-start' onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to Fitness Heroes <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegiater}>Register</Link></p>
      <GoogleLogin></GoogleLogin>
    </div>
    
  )
}

export default Login