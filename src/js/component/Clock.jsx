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
        <div>
            <div className="container">
            <div className="number">{arr[0]}</div>
            <div className="number">{arr[1]}</div>
            <div className="number">{arr[2]}</div>
            <div className="number">{arr[3]}</div>
            <div className="number">{arr[4]}</div>
        </div>
        </div>
    );
};

export default Clock;
