import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-warning">
          <div className="container-fluid">
            <Link to={'/'}> <a className="navbar-brand" >Entertainment Menu</a> </Link> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to={'/'}><a className="nav-link" aria-current="page"  >Home</a></Link>
                </li>
                <li className="nav-item">
                  <Link to={'/Favourites'} ><a className="nav-link" >Favourites</a></Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
