import React, { useState, useRef, useEffect } from "react";
import "./SaleCountDown.css";

const SaleCountDown = ({ saleSrc, status }) => {
  console.log("dad - Children.Product -Children.SaleCountDown");
  // console.log(props);
  const [flashingColor, setFlashingColor] = useState(false);
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  console.log(status);
  let interval = useRef();
  let distance = 0;
  useEffect(() => {
    setFlashingColor(!flashingColor);

    return () => {};
  }, [timerSeconds]);
  const startTimer = () => {
    const countdownDate = new Date("Feb 28 2021 14:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };
  useEffect(() => {
    const ref = interval.current;

    startTimer();

    return () => {
      clearInterval(ref);
    };
  }, []);
  const img = saleSrc.map((src) => (
    <img
      key={src.id}
      src={src.image}
      alt=""
      className="imgSale"
      style={{
        borderColor: flashingColor ? "red" : null,
      }}
    />
  ));
  const sale = (
    <>
      {/* {img} */}
      <div> :המבצע יגמר עוד</div>

      <div className="tim">
        <div>
          {timerDays >= 1 && timerDays}
          {timerDays >= 1 && (
            <div>{`${Number(timerDays) > 1 ? `ימים` : `יום`} `}</div>
          )}
        </div>
        <div>
          {Number(timerHours) >= 10 ? timerHours : "0" + timerHours}
          <div> שעות </div>
        </div>
        <div className="colon" style={{ color: flashingColor ? "red" : null }}>
          {":"}
        </div>

        <div>
          {Number(timerMinutes) >= 10 ? timerMinutes : "0" + timerMinutes}
          <div> דקות</div>
        </div>
        <div className="colon" style={{ color: flashingColor ? "red" : null }}>
          {":"}
        </div>
        <div>
          {Number(timerSeconds) >= 10 ? timerSeconds : "0" + timerSeconds}
          <div> שניות</div>
        </div>
      </div>
    </>
  );
  return (
    <div className="sale" key={distance}>
      {status ? sale : "המבצע נגמר"}
    </div>
  );
};

export default SaleCountDown;
