import { useState, useEffect } from "react";

function StopWatch() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if(prevCount >= 10) {
          clearInterval(intervalId);
          return prevCount;
        } else {
          return prevCount + 1;
        }
      });
    }, 1000); // interval set to 1000ms (1 second)

    return () => clearInterval(intervalId); // Cleanup function to clear the interval on unmount
  }, []);

  return (
    <div style={{ border: "1px dashed red", padding: "10px", margin: "10px" }}>
      <h1>Stop Watch</h1>
      <h4>{count}</h4>
    </div>
  );
}

export default StopWatch;
