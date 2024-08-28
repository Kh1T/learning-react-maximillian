import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

// 190
const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {



  // 187: use useEffect
  useEffect(() => {
    // 186: Set time 0ut
    console.log("Timer Set");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);

    // 187: return another function
    return () => {
      console.log("Cleaning up timer");
      clearTimeout(timer);
    };
    // 187: add dependency
  }, [onConfirm]);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      {/* //190 */}
      <ProgressBar timer={TIMER} />
    </div>
  );
}
