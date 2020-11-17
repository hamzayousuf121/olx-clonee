import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {facebookLogin, googleLogin, githubLogin} from '../../Redux/Actions/auth'
import { useHistory } from "react-router-dom";

function LoginButton(props) {
    const history = useHistory()
    return (
        <div>
            <Link to="/login"><button className='loginBtn'><span className='text-center'>Continue with Email</span></button>
            </Link>
            <button className='loginBtn' onClick={()=> props.googleLogin(history)}><span className='text-center'>Continue with Google</span></button>
            <button className='loginBtn' onClick={()=> props.facebookLogin(history)}><span className='text-center'>Continue with Facebook</span></button>
            <button className='loginBtn' onClick={()=> props.githubLogin(history)}><span className='text-center'>Continue with Github</span></button>
            <span className='text-center detailMsg'>We won't share your personal details with anyone</span>
        </div>
    )
}
  function mapDispatchToProps(dispatch) {
    return {
      facebookLogin: (history) => dispatch(facebookLogin(history)),
      googleLogin:   (history) => dispatch(googleLogin(history)),
      githubLogin:   (history) => dispatch(githubLogin(history)),  
    }
  }
  export default connect(null, mapDispatchToProps)(LoginButton)