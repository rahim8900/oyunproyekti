import React from 'react'
import "./end.css"
export default function End({content,score}) {
  return (
    <div className='EndPage'>
        <p className='text'>{content}</p>
        <br/>
        <p className='text'>Xal: {score}</p>
        <button onClick={()=>window.location.reload()}>Yenidən</button>
    </div>
  )
}