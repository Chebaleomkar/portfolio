import React from 'react'

const Title = ({ id , title} : {id : string ;title : string }) => {
  return (
    <h2 id={id} style={{scrollBehavior:"smooth"}} className="text-3xl font-bold mb-4">
        {title}
    </h2>
  )
}

export default Title