import React from 'react';
import './ropaformal.css';
import trajes from '../assets/cloth.png';

const RopaFormal = () => {
  return (
    <div className="vestimenta-container">
      <div className="vestimenta">
        {/* Дресс-код: светлые цвета и праздничный коктейльный стиль */}
        <p>Дресс-код: светлые цвета, праздничный коктейльный стиль</p>
        <img src={trajes} alt="Пример нарядов" className="trajes" />
      </div>
    </div>
  );
};

export default RopaFormal;
