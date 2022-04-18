import React, { useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

function Login() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  if(user){
    navigate('/home')
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>New to Fiitness Heroes <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegiater}>Register</Link></p>
    </div>
    
  )
}

export default Login