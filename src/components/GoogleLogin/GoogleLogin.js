import React from 'react'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


function GoogleLogin() {
    const navigate = useNavigate()
    const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
    if (error) {
        return (
          <div>
            <p>Error: {error.message}</p>
          </div>
        );
      }
      if (user) {
        navigate('/home')
      }
  return (
    <div>
        <h2>Google login</h2>
        <div>
            <button onClick={()=>signInWithGoogle()} className='btn btn-primary my-3'>Google Sign In</button>
        </div>
    </div>
  )
}

export default GoogleLogin