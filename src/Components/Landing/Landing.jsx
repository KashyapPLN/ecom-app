import React from 'react';
import './Landing.css';
import landing from '../../assets/landing1.png';

export default function Landing() {
  return (
    <div className='landing'>
      <img className='landing-img' src={landing} alt="Landing" />
      <button className='try-now-btn'>Try Now</button>
    </div>
  );
}
