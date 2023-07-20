import { useState, useEffect } from "react";
import { helloConstant } from "../Constants/Hello.Constant";

export default function Hello({ setIsHello }) {
  // USE STATES
  const [name, setName] = useState("Hello");

  // USE EFFECTS
  useEffect(() => {
    // HELLO CONSTANT INDEX
    let index = 0;

    // INTERVAL (200MS)
    const interval = setInterval(() => {
      // SET NAME
      setName(helloConstant[index]);

      // INCREMENT INDEX
      index++;

      // IF INDEX IS EQUAL TO HELLO CONSTANT LENGTH
      if (index === helloConstant.length) {
        // CLEAR INTERVAL
        clearInterval(interval);

        // CHANGE STATE
        setIsHello(false);
      }
    }, 150);
  }, [helloConstant]);

  return <p className="text-white text-5xl">{name}</p>;
}
