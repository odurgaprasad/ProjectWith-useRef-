import React, { useState, useRef } from "react";
import Modal from "./Modal";

export default function TimerChallenges({ title, target }) {
  const timerRef = useRef();
  const modalRef = useRef();
  const [timerStarted, setTimerStarted] = useState(target * 1000);
  const timerIsActive = timerStarted < 0 && timerStarted <= target * 1000;

  if (timerStarted <= 0) {
    clearInterval(timerRef.current);
    // setTimerStarted(target * 1000);
    modalRef.current.open();
  }

  function handleStartButton() {
    timerRef.current = setInterval(() => {
      setTimerStarted((prevTimerStarted) => prevTimerStarted - 10);
    }, 10);
  }

  function handleStopButton() {
    clearInterval(timerRef.current);
    modalRef.current.open();
  }

  function handleResetButton() {
    setTimerStarted(target * 1000);
  }
  return (
    <>
      <Modal
        result="You lose"
        target={target}
        ref={modalRef}
        remainingTimer={timerStarted}
        onReset={handleResetButton}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} seconds {target > 1 ? "s" : ""}
        </p>
        <p>
          <button
            onClick={!timerIsActive ? handleStartButton : handleStopButton}
          >
            {!timerIsActive ? "start" : "stop"}
          </button>
        </p>
      </div>
    </>
  );
}
