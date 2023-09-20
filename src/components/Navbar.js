import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {    //pass the (props) as a parameter in the function

    return (
        
      <nav className={`navbar navbar-expand-lg bg-body-tertiary navbar-bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand nav-text-${props.mode}`} href="/">TextUtils</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a className={`nav-link active nav-text-${props.mode}`} aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link active nav-text-${props.mode}`} href="/about">{props.aboutText}</a>  {/*calling/using the props */}
              </li>

              <li className="nav-item">
                            <a className={`nav-link active nav-text-${props.mode}`} href="/">{props.contactText}</a>
              </li>
              
            </ul>

            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
               <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Enable dark mode</label>  {/*using ternary operator */}
            </div>

          </div>
        </div>
      </nav>
    )
}

//defining the propTypes 
Navbar.propTypes = {
    aboutText: PropTypes.string,   //define that aboutText prop must be of string type
    contactText: PropTypes.string,
}

// Specifies the default values for props:  (if we don't pass the props value then default props value will be shown)

Navbar.defaultProps = {
    aboutText: 'Set tittle here',
    contactText: 'Set Contact'
};

//rfc (command)  --> to get the react function component
//impt (command)  --> to get the import statement of proptypes
//pts  (command)  --> PropTypes.string



//If the developer bymistakely give a number in aboutText prop then it will show error