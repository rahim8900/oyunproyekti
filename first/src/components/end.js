import React from 'react'
import "./end.css"
export default function End({content,score,colorbg}) {
  return (
    <div className='EndPage' style={{background:colorbg}}>

        <p className='text'>{content}</p>
        <br/>
        <p className='text'>Xal: {score}</p>
        <button onClick={()=>window.location.reload()}>Yenidən</button>
    </div>
  )
}