import { useEffect, useRef, useState } from "react"
import style from "./Timer.module.css";

const Timer=()=>{
    const [time,setTime]=useState(0);
    const [timerOn,setTimeOn]=useState(false);
    const timer = useRef(null);
    useEffect((timer)=>{
        if(timerOn)
        {
            timer=setInterval(()=>{
                 setTime((prev)=>prev+10)
             },10)
        }
        else if(!timerOn){
            clearInterval(timer)
        }
        return ()=>{
            clearInterval(timer)
        }
    },[timerOn])

    const handleStop=()=>{
        setTimeOn(false)
    }

    const handleStart=()=>{
        setTimeOn(true);
    }
    
    const handleReset=()=>{
        setTime(0);
        setTimeOn(false)
    }
    
    

    return(
        <div className={style.StopWatch}>
             <h1 className={style.name}>Google Timer</h1>
            <div ref={timer} className={style.time}>
                <span>{("0"+ Math.floor((time/600000)%60)).slice(-2)} H :</span>
                <span>{("0"+ Math.floor((time/60000)%60)).slice(-2)} M :</span>
                <span>{("0"+ Math.floor((time/1000)%60)).slice(-2)} S :</span>
                <span>{("0"+ ((time/10)%100)).slice(-2)} MS</span>
            </div>
            <div className={style.b}>
                <button className={style.start} onClick={handleStart}>START</button>
                <button className={style.stop} onClick={handleStop}>STOP</button>
                <button className={style.reset} onClick={handleReset}>RESET</button>
            </div>
        </div>
    )
}
export {Timer}