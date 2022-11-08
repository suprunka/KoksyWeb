import React, { useState, useRef, useEffect } from 'react'
import PropTypes from "prop-types"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Timer({secondToCount,onClick}) {
  
    const Ref = useRef(null);
    const [timer, setTimer] = useState('00:00:00');
    const [mySeconds, setMySeconds] = useState(1);
  
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }
  
  
    const startTimer = (e) => {

        let { total, hours, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
            setMySeconds(100-100/(secondToCount)*(seconds+60*minutes))
        }
        else{
            onClick()
        }
    }
  
    const clearTimer = (e) => {
        
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);

        }, 1000)
        Ref.current = id;

    }
  
    const getDeadTime = (secondToCount) => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds()+secondToCount);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime(secondToCount));
    }, []);
  
    return (
        <div className="timer" onClick={onClick}>
            <CircularProgressbar
        value={mySeconds}
        text={timer}
        strokeWidth={5}
      />
        </div>
    )
}
  
export default Timer;
Timer.propTypes = {
    secondToCount: PropTypes.number,
    onClick:PropTypes.func
  };

