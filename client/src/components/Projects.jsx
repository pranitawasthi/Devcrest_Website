import React from 'react'
import '../Project.css'

function Card(){
    return(
        <>

<div className="card">
  <div className="contr">
contribution
  </div>
  <div className="techst">
    html css

  </div>

  <div className="details">
    button
  </div>
</div>


        </>
    )
}

export const Projects = () => {
  return (
    <>
    
    <h1 className='txtgr'>Our Projects</h1>
    <br />
    

    <div className="cnt">
    <Card>ff</Card>
    <Card>ff</Card>
    <Card>ff</Card>
    <Card>ff</Card>
    <Card>ff</Card>
    <Card>ff</Card>
    </div>


    </>
    )
}
