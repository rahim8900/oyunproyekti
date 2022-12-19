import React, { useEffect } from 'react'
import './time.css'
export default function Time({ time, setTime }) {
    function updateTime() {
        setTime(time);
        time += 0.5;
    }
    useEffect(() => { setInterval(updateTime, 1000) }, [])
    return (
        <div className='time'>
            Vaxt: {time-0.5}
        </div>
    )
}
