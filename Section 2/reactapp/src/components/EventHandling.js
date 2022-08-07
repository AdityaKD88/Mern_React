import React from 'react'

const EventHandling = () => {

    const handleClick = () =>{
        console.log('Clicked');
    }
  return (
    <div className='container mt-5'>
        <h1 className='text-center display-4' style={{fontWeight:'bold', color:'black'}}>Event Handling</h1>
        <hr />

        <h4>Click Event</h4>
        <button className='btn btn-primary' onClick={()=>{ alert('Nice, now click ok') }}>Click to See</button>
        <button className='btn btn-danger' onClick={handleClick}>Another Click Event</button>
    </div>
  )
}

export default EventHandling