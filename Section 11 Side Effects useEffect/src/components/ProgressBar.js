import { useState, useEffect } from "react";

export default function ProgressBar({timer}) {
  // 190
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Interval");
      setRemainingTime((prevTime) => {
        if (prevTime <= 300) {
          clearInterval(interval); // Stop the interval when time reaches STOP_TIME
          return prevTime; // Return the current time, so it doesn't go negative
        }
        return prevTime - 10;
      });
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={3000} />;

}
