import {React , useState} from 'react';

import Button from '../UI/Button';


const LogIn = () => {
  const [error, setError] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePassword= (password)=>{
    const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/
    return regExp.test(String(password).toLowerCase())
  }
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
  //  console.log('enteredPassword',enteredPassword)
 //   console.log('enteredPassword',enteredPassword.length)
    setEnteredPassword(event.target.value);
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (!validateEmail(enteredEmail)) {
      setError('Invalid Email');
    }

    if (!validatePassword(enteredPassword)) {
      setError('Not a strong password');
    }


    if (!error) {
      // No errors.
    }
  };

  return(
    <>
    <div className="container">
        <div className="title">
            <form onSubmit={handleSubmitClick}>
                <div className="form-group">
                    <input 
                      type="email" 
                      className="email"
                      placeholder="Email"
                      onChange={emailChangeHandler}/>
                </div>
                <div className="form-group">
                    <input 
                      type="password" 
                      className="password"
                      placeholder="Password"
                      onChange={passwordChangeHandler}/>
                </div>
                <button type="submit" className="button">Enter</button>
             </form>
        </div>
    </div>
    </>
)
}

export default LogIn;

