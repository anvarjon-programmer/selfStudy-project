import React, { useState } from 'react'
import styles from './Auth.module.scss';
import Card from '../../components/card/Card';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';
// import { toast } from "react-toastify";


const Register = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [cPassword,setCPassword] = useState('')
  const [isLoading,setIsLoading] = useState(false);

  const navigate = useNavigate()

  const registerUser = (e) =>{
    e.preventDefault(); 
    if(password !== cPassword){
      toast.error("Password do not match")
    }
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      setIsLoading(false);
      toast.success("Registration Successful...");
      navigate('/login')
    })
    .catch((error) => {
      toast.error(error.message);
      setIsLoading(false);
    });

  }
  return (
    <>
    <ToastContainer />
    {isLoading && <Loader/>}
    <section className={`container ${styles.auth}`}>
      
           <Card>
              <div className={styles.form}>
                <h2>Register</h2>
                <form onSubmit={registerUser}>
                  <input type="text" placeholder='Email' required
                  value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" placeholder='Password' required 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <input type="password" placeholder='Config  Password' required 
                  value={cPassword} onChange={(e) => setCPassword(e.target.value)}/>
                  <button className='--btn --btn-primary --btn-block'>Register</button>
                  
                </form>
                {/* <button className='--btn --btn-danger'><FaGoogle/> Login with Google</button> */}
                <span className={styles.register}>
                  <p>Don't have an account?</p>
                  <Link  to='/login'>Login</Link>
                </span>
              </div>
           </Card>
           <div className={styles.img}>
          <img src="https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/register.png?raw=true" alt="" width={500}/>
        </div>
  </section>
  </>
  )
}

export default Register