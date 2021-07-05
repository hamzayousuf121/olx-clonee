import React, { useState, useEffect } from 'react';
import {Navbar, NavbarText} from 'reactstrap'; 
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import Login from '../Login/Login'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {checkUser} from '../../Redux/Actions/auth'
import Sell from './Sell.js';
import Signin from './Signin';
import { getAllProducts } from "../../Redux/Actions/Product";
import {useHistory} from 'react-router-dom'

function Header(props) {

const {checkUser, getAllProducts} = props
const history = useHistory()

useEffect(() => {
  checkUser()
  getAllProducts()
}, [])

  const [isOpen, setIsOpen] = useState(false);
  const [searchField, setSearchField] = useState('');

  const toggle = () => setIsOpen(!isOpen);

  const searchProduct = () => {
    if(searchField !== ''){
      history.push(`/search/${searchField}`)}
    }

    return (
    <>
      <Login toggle={toggle} modal={isOpen} />
      <Navbar color="light" light fixed='true' className='headerNavbar'>
        <div className="container-fluid ContainerFluid">
          <div className="row w-100 rowParent">
            <div className="col-lg-4 col-md-3 col-sm-2 d-flex logoParent">
              <Link to="/" className='ml-3 mt-4 navbar-brand'>
                <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className="" fillRule="evenodd"><path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
              </Link>
              <div className='header__category'>
                <FontAwesomeIcon icon={faSearch} size="lg" className='searchIcon' />
                <input type='text' className='inputCategory' defaultValue='Karachi Sindh' />
                <FontAwesomeIcon icon={faChevronDown} size="lg" className='header__caretDown' />
              </div>
            </div>
            <div className="col-lg-6 header__searchParent">
              <div className='header__search'>
                <input type='text' className='inputSearch' onChange={(e) => setSearchField(e.target.value)}  placeholder='Find Cars Mobile Phone and More' />
                <span className='header__searchParent' onClick={()=> searchProduct() }><FontAwesomeIcon icon={faSearch} size="lg" className='header__searchBtn' /></span>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3">
            {Object.keys(props.currentUser).length > 0 ? <Signin /> : <div className='d-flex'><span className='header__login' onClick={toggle}>Login</span>
             <Sell toggle={toggle} modal={isOpen} />
             </div>}
            </div>
            <NavbarText>
            </NavbarText>
          </div>
        </div>
      </Navbar>
    </>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    checkUser: () => dispatch(checkUser()),
    getAllProducts: () => dispatch(getAllProducts()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)

