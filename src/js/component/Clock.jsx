import React, { useState, useEffect } from "react";

const Clock = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const newArr = count.toString().split("");
    while (newArr.length < 5) {
      newArr.unshift("0");
    }
    setArr(newArr);
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {arr.map((number, index) => (
        <div
          key={index}
          style={{ fontSize: "2rem", marginRight: "10px" }}
        >
          {number}
        </div>
      ))}
    </div>
  );
};

export default Clock;
