import { forwardRef, useImperativeHandle, useRef } from "react";

const Modal = forwardRef(function Modal(
  { target, remainingTimer, onReset },
  ref
) {
  const modalRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current.showModal();
      },
    };
  });

  const remainingTimerData = remainingTimer <= 0;

  const formattedRemainingTime = (remainingTimer / 1000).toFixed(2);
  const score = Math.round((1 - remainingTimer / (target * 1000)) * 100);
  return (
    <dialog ref={modalRef} className="result-modal">
      {remainingTimerData && <h2>You Lose</h2>}
      {!remainingTimerData && <h2>You Score : {score}</h2>}
      <p>
        your target time was <strong>{target} seconds</strong>
      </p>
      <p>
        You Stopped The Timer with{"  "}
        <strong>{formattedRemainingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default Modal;
