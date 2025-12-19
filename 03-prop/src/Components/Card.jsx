import React from 'react'

const Card = (props) => {
  console.log(props);
  
  return (
    <div className="card">
        <img src="https://plus.unsplash.com/premium_photo-1761947288852-933ad1a61d22?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDkxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"  />
        
        
        <h1>{props.User}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
  )
}

export default Card