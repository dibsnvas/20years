import React, { useEffect, useState } from 'react';
import './homeScreen.css';

const Clock = ({ deadline }) => {
  const [time, setTime] = useState({
    days: 0, hours: 0, minutes: 0, seconds: 0,
  });

  const leading0 = (n) => (n < 10 ? '0' + n : n);

  const calcTimeLeft = () => {
    const diff = Date.parse(deadline) - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  useEffect(() => {
    setTime(calcTimeLeft());                 // сразу выставляем
    const timer = setInterval(() => setTime(calcTimeLeft()), 1000);

    return () => clearInterval(timer);       // корректный cleanup
  }, [deadline]);

  const { days, hours, minutes, seconds } = time;

  return (
    <div className="countdown">
      <div className="countdown-grid">
        <span className="num">{leading0(days)}</span>
        <span className="num">{leading0(hours)}</span>
        <span className="num">{leading0(minutes)}</span>
        <span className="num">{leading0(seconds)}</span>

        <span className="lab">Дней</span>
        <span className="lab">Часов</span>
        <span className="lab">Минут</span>
        <span className="lab">Секунд</span>
      </div>
    </div>
  );
};

export default Clock;
