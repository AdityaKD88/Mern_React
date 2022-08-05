// 1. React components are functions
// 2. Function name must start with uppercase (otherwise it will be invalid)
// Both components & html tags are treated in same way that is why we write
// components name starting with uppercase as all html tage are in lowercase
// 3. Function should return atleast single JSX element
// 4. Function should be exported

import React from 'react';
import './home.css';
import myimg from '../images/thank-you.gif'

const Home = () => {
  return (
    <div>
        <h1 className='myclass' style={{color:'red', backgroundColor:'yellow'}}>Home Page</h1>
        <hr />
        <img src='images/thank-you.gif' alt="" />
        <img src={myimg} alt="" />
    </div>
  )
}

export default Home