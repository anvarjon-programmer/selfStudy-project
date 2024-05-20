import { Link, useNavigate } from 'react-router-dom';
import styles from './Auth.module.scss';
import { FaGoogle } from "react-icons/fa";
import Card from '../../components/card/Card';
import { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import Loader from '../../components/loader/Loader';

const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [isLoading,setIsLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        setIsLoading(false);
        toast.success("Login Successful...");
        navigate('/')
        // redirectUser();
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error.message);
      });
  };

  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // const user = result.user;
        toast.success("Login Successfully");
        // redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

    


  return (
    <>
    {isLoading && <Loader/>}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src="https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/login.png?raw=true" alt="" width={500}/>
        </div>
           <Card>
              <div className={styles.form}>
                <h2>Login</h2>
                <form onSubmit={loginUser}>
                  <input type="text" placeholder='Email' required 
                  value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input type="password" placeholder='Password' required 
                  value={password} onChange={(e) => setPassword(e.target.value)}/>
                  <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
                  <div className={styles.links}>
                    <Link to='/reset'>Reset Password</Link>
                  </div>
                  <p>-- or --</p>
                </form>
                <button onClick={signInWithGoogle} className='--btn --btn-danger --btn-block'><FaGoogle/> Login with Google</button>
                <span className={styles.register}>
                  <p>Don't have an account?</p>
                  <Link  to='/register'>register</Link>
                </span>
              </div>
           </Card>
  </section>
    </>
  )
  
}

export default Login