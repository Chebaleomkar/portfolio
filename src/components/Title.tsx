import React from 'react'

const Title = ({ id , title} : {id : string ;title : string }) => {
  return (
    <h2 id={id} style={{scrollBehavior:"smooth"}} className=" text-center font-bold text-4xl max-sm:text-3xl  mb-4">
        {title}
    </h2>
  )
}

export default Title