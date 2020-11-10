import React from 'react'
import './Appadds.css';
import AppImg from '../images/phone-app.webp'
import playStoreBtn from '../images/playstore_2x.png'
import appStoreBtn from '../images/appstore_2x.png';
function Appadds() {
    return (
        <div className="row mainAppAdds">
<div className='col-lg-4 col-md-12 col-12 col-sm-4'>
<img src={AppImg} alt='App Screens' className='img-fluid'/>
</div> 
<div className='col-lg-4 col-md-12 col-12 col-sm-4'>
<h1 className='display-5 app__heading'>
TRY THE OLX APP

</h1>
<p>Buy, sell and find just about anything using the app on your mobile.</p>
</div>
<div className='col-lg-4 col-md-12 col-12 col-sm-4'>
      <h5 className='apptoday'>Get Your App Today</h5>
    <img src={playStoreBtn} alt='PlayStore Button' className='img-fluid playstorebtn'/>
    <img src={appStoreBtn} alt='appStore Button' className='img-fluid appstorebtn'/>
</div>      
        </div>
    )
}

export default Appadds
