import  { useState, useEffect } from "react";

const useCounter = (counterBool = false) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (!counterBool) {
        setCounter((previous) => previous + 1);
      } else {
        setCounter((previous) => previous - 1);
      }
    }, 1000);

    return () => clearTimeout(countdown);
  }, [counterBool]);

  return counter;
};

export default useCounter;
