import React from 'react'

const Results = (props) => {
    const img=`https://source.unsplash.com/500x400/?${props.pic}`
  return (
    <>
    <div className='img'>
    <img  src={img} alt="Unable to load Picture" />
    </div>
     
    </>
  )
}

export default Results
