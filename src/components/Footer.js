import React from 'react';
import '../styles/Footer.css';
import Facebook from '../images/Facebook.png';
import Github from '../images/Github.png';
import Gmail from '../images/Gmail.png';
import Instagram from '../images/Instagram.png';

function Footer() {
  return (
    <div className='footer'>
    <br></br>
    <br></br>
    <a href = "mailto: Tran.Thaivy1997@gmail.com"><img src={Gmail} alt="email" /></a>
    <a href="https://github.com/ThaivyTran"><img src={Github} alt="github" /></a>
    <a href="https://www.instagram.com/ipoppedyocherry"><img src={Instagram} alt="ig" /></a>
    <a href="https://www.facebook.com/thaivy.tran"><img src={Facebook} alt="fb" /></a>
    <br></br>
    </div>
  )
}

export default Footer;