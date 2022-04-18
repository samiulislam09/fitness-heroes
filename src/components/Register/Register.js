import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

function Register() {

    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const navigateLogin = event =>{
        navigate('/login');
    }
    if(user){
        navigate("/home")
    }
    if(loading){
      return <Loading></Loading>
    }
    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
  return (
    <div className='register-form'>
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
            <input type="text" name='name' id='' placeholder='Name' required />
            <br/>
            <input type="email" name='email' placeholder='Email' required />
            <br/>
            <input type="password" name='password' placeholder='password' required />
            <br/>
            <input className='btn btn-primary' type="submit" value='register' />
        </form>
        <p>Already have an account <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Login</Link></p>
    </div>
  )
}

export default Register