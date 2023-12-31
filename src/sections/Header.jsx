import { Link } from 'react-router-dom'

export function Header() {
    return (
        <div className="container">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
            <div className="col-md-3 mb-2 mb-md-0">
              <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
              </a>
            </div>

            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 link-primary">Home</Link></li>
              <li><Link to="/services" className="nav-link px-2">Services</Link></li>
              <li><Link to="/listing" className="nav-link px-2">Listing</Link></li>
            </ul>

            <div className="col-md-3 text-end">
              <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          </header>
        </div>
    )
}