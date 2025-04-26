import React from 'react'
import Clock from './Clock'
import './homeScreen.css'
import logo from '../assets/200.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import InvitationName from './InvitationName';

const HomeScreen = () => {

  return (
    <div className="homeScreen">
      <div className="logo-mis-15">
        <img className="logo" src={logo} alt="" />
        <div className="circle"></div>
      </div>
      <div className="info">
      <InvitationName />
        <div className="fechayhora">
          <p>13 | 05 | 2025 </p>
          <p>7 PM</p>
        </div>
        <p>Astra Grand Cafe</p>
        <a href="https://go.2gis.com/MREzB" target={`_blank`} className="btn-mapa">Смотреть карту</a>        
      </div>
      <Clock deadline="may, 13, 2025" />
      <div className="arrow-down">
        <FontAwesomeIcon icon={faArrowDown} />
      </div>
    </div>
  )
}

export default HomeScreen