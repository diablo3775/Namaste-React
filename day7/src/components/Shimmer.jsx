import React from 'react'

const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(10).fill("").map((shimmercards, index) => (
        <div className='shimmer-card' key={index}></div>
      ))}
    </div>
  )
}

export default Shimmer