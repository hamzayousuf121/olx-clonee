import React from 'react';
import './Banner.css';
import BannerImg from '../images/hero_bg_pk.jpg';

function Banner() {
    return (
        <>
          <div className="Banner__HeroImg" style={{backgroundImage: `url(${BannerImg})`}}></div>
        </>
    )
}

export default Banner
