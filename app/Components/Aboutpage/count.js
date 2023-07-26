"use client";

import { useState ,useEffect } from "react";



export default function useCount(e , isInView4){
    const [count, setCount] = useState(1);
    const [shouldContinue, setShouldContinue] = useState(true);
    const stopNumber = e  

    useEffect(() => {
        if(isInView4){
         const interval = setInterval(() => {
           setCount((prevCount) => {
             if (!shouldContinue) return prevCount;
             const newCount = prevCount === e ? 1 : prevCount + 1;
             if (newCount === stopNumber) {
    
               setShouldContinue(false);
               return stopNumber;
             }
             return newCount;
           });
         }, 1);
         return () => clearInterval(interval);
        }
   
     }, [stopNumber, shouldContinue ,isInView4]);

     return count
}
