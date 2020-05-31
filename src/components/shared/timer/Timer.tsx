import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

type DateProps = {
  dueDate: Date;
};

const Timer = ({ dueDate }: DateProps) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(dueDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];
  let days = true;
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    if (interval === "dias") {
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}
        </span>
      );
      days = false;
    } else {
      timerComponents.push(
        !days ? (
          <span>
            {", "}
            {timeLeft[interval]}
          </span>
        ) : (
            <span>
              {":"}
              {timeLeft[interval]}
            </span>
          )
      );
      days = true;
    }
  });

  return <div className="timer-container">{timerComponents}</div>;
};

export default Timer;
