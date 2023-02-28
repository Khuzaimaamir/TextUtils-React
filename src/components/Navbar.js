import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const { mode, title, home, toggleMode } = props;

  return (
    <div>
      <div className="App">
        <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">
              {title}
            </Link> */}
            <a className="navbar-brand" href="/">
              {title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/">{home}</Link> */}
                  <a className="nav-link" href="/">{home}</a>
                </li>
                <li className="nav-item">
                  {/* <Link className="nav-link" to="/about">{about}</Link> */}
                  <a className="nav-link" href="/about">{props.about}</a>
                </li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                type="checkbox"
                onClick={toggleMode}
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  home: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};

Navbar.defaultProps = {
  title: 'Set value here',
  home: 'Set value here',
  mode: 'light',
  toggleMode: () => {},
};
