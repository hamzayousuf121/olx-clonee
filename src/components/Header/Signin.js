import React from 'react'
import {UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'; 
import Sell from './Sell';
import {Link} from 'react-router-dom';
import {signOut} from '../../Redux/Actions/auth';
import {connect} from 'react-redux'
function Signin(props) {
    return (
        <>
             <UncontrolledDropdown nav inNavbar className="d-flex">
              <DropdownToggle nav caret>
              <img src={props.currentUser.imageUrl} alt="" 
              className="img-rounded ml-3 border-radius-50" width="40" height="40" />          
                 </DropdownToggle>
                 <Link to="/posts"><Sell /></Link>
              <DropdownMenu left={true.toString()}>
                <DropdownItem onClick={()=> props.signOut()}>
                  Logout
                </DropdownItem>
               </DropdownMenu>
            </UncontrolledDropdown> 
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
    signOut: () => dispatch(signOut()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Signin)

