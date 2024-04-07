import React, { useState } from 'react'
import Results from "../LiveSearch/Results"


const  App1 = () => {
    const[img,setImg]=useState("Nature")
  return (
    <>
    <h1>Personalized Image Search App</h1>
    <div className='search'>
    <input type="text" 
    placeholder='Search' 
    value={img}
    onChange={(e)=>{setImg(e.target.value)}}/>

     {img=== ""? null:<Results pic={img}/>}
     {/* ye line ka mtlb hai agar user kuch type kre tab hi dikhana img warna nhi */}

    </div>
    </>
  )
}

export default App1
