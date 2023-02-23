import React from 'react'

const Shimmer = () => {
  return (
    <div className="restaurantList">
      {Array(10).fill("").map((shimmercards) => (
        <div className='shimmer-card'></div>
      ))}
    </div>
  )
}

export default Shimmer