import { Link } from 'react-router-dom'
import style from './Auth.module.css'
import { useState } from 'react'
import { isValidEmail, isValidPassword, isValidPhone, isValidUsername } from '../lib/IxValid';

export function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [tos, setTos] = useState(false);

  function handleChangeUsername(event) {
    setUsername(event.target.value);
  }
  function handleChangeEmail(event) {
    setEmail(event.target.value);
  }
  function handleChangePhone(event) {
    setPhone(event.target.value);
  }
  function handleChangePass(event) {
    setPass(event.target.value);
  }
  function handleChangeRePass(event) {
    setRePass(event.target.value);
  }
  function handleChangeTos(event) {
    setTos(!tos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('asd');
    console.log({
      username,
      email,
      phone,
      pass,
      rePass,
      tos,
    });

    let isAllinfoOk = true;
    
    if (!isValidUsername(username)) {
      isAllinfoOk = false;
    }
    if (!isValidEmail(email)) {
      isAllinfoOk = false;
    }
    if (!isValidPhone(phone)) {
      isAllinfoOk = false;
    }
    if (!isValidPassword(pass)) {
      isAllinfoOk = false;
    }
    if (!isValidPassword(rePass)) {
      isAllinfoOk = false;
    }
    if (tos !== true) {
      isAllinfoOk = false;
    }
    console.log('asd', isAllinfoOk);
  }
  
    return (
        <section className="container">
            <div className="row">
                <form onSubmit={handleSubmit} className="col-12 col-sm-10 offset-sm-1 col-dm-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 mb-5">
                  <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                  <h1 className={style.mainTitle + ' mb-3 fw-normal'}>Please sign in</h1>

                  <div className="form-floating">
                    <input onChange={handleChangeUsername} value={username} type="txt" className="form-control" id="username" placeholder="Username" />
                    <label htmlFor="floatingInput">Username</label>
                  </div>

                  <div className="form-floating">
                    <input onChange={handleChangeEmail} value={email} type="email" className="form-control" id="email" placeholder="name@example.com" />
                    <label htmlFor="email">Email address</label>
                  </div>
                  
                  <div className="form-floating">
                    <input onChange={handleChangePhone} value={phone} type="tel" className="form-control" id="phone" placeholder="+37012345678" />
                    <label htmlFor="phone">Phone number</label>
                  </div>

                  <div className="form-floating">
                    <input onChange={handleChangePass} value={pass} type="password" className="form-control" id="password" placeholder="Password" />
                    <label htmlFor="password">Password</label>
                  </div>

                  <div className="form-floating">
                    <input onChange={handleChangeRePass} value={rePass} type="password" className="form-control" id="passwordRepeat" placeholder="Password" />
                    <label htmlFor="passwordRepeat">Repeat Password</label>
                  </div>

                  <div className="form-check text-start my-3">
                    <input onChange={handleChangeTos} value={tos} className="form-check-input" type="checkbox" id="agree" />
                    <label className="form-check-label" htmlFor="agree">
                      Agree to <Link to="/tos">Terms o Service</Link>
                    </label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                </form>  
            </div>
        </section>
    )
}