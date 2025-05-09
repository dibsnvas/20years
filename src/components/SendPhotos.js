import React from 'react';
import { Button } from 'react-bootstrap';
import './sendPhotos.css';

const SendPhotos = () => (
  <div className="fotos-container">
    <div className="visuals" />
    <h3>Хотите поделиться своими фотографиями после праздника?</h3>

    {/* variant="light" → Bootstrap не задаёт свой синий фон */}
    <Button
  className="fotos-btn"
  href="https://drive.google.com/drive/folders/1gWYJvQp6KcCPpyKzEo7cRpaz22ZnOBqY?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  Передайте их сюда!
</Button>

  </div>
);

export default SendPhotos;
