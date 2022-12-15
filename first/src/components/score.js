import React from 'react'
import "./score.css"
export default function Score({score}) {
  return (
    <div className='score'>
        Xal: {score}
    </div>
  )
}