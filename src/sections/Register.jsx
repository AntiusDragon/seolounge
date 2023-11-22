import { Link } from 'react-router-dom'
import style from './Auth.module.css'

export function Register() {
    return (
        <section className="container">
            <div className="row">
                <form className="col-12 col-sm-10 offset-sm-1 col-dm-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4 mt-5 mb-5">
                  <img className="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                  <h1 className={style.mainTitle + ' mb-3 fw-normal'}>Please sign in</h1>

                  <div className="form-floating">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input type="tel" className="form-control" id="floatingInputPhone" placeholder="+37012345678" />
                    <label htmlFor="floatingInput">Phone number</label>
                  </div>

                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>

                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPasswordRepeat" placeholder="Password" />
                    <label htmlFor="floatingPasswordRepeat">Repeat Password</label>
                  </div>

                  <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="tos" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                      Agree to <Link to="/tos">Terms o Service</Link>
                    </label>
                  </div>
                  <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                </form>  
            </div>
        </section>
    )
}