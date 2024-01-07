import React from 'react'

const WorningBox = () => {
  const header = <h3>Do you agree</h3>;
  return (
    <>
    <div className="worningbox">
      <div className="box">
        <h1>{header}</h1><br /><br />
        <p>Lorem ipsum dolor sit amet
           consectetur adipisicing elit. 
           Dolores optio eos iusto est amet vitae odit 
           voluptate dolor excepturi iure.
        </p><br />
        <button>Submit</button>
      </div>
    </div>
    </>
  )
}

export default WorningBox