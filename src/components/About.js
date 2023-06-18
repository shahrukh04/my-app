import React, { useState } from 'react'

export default function About() {
 
 const [myStyle, setMyStyle] = useState( {
    color: 'black',
    backgroundColor: 'white',
    
 })
 const [btnText, setBtnText] = useState("Dark Mode On")

const toggleStyle =()=>{
    if(myStyle.color === 'black'){
    setMyStyle({
        color: 'white',
    backgroundColor: 'black',
    })
        setBtnText("Dark Mode of")

    }
    else{
        setMyStyle({
            color: 'black',
        backgroundColor: 'white',
    })
    setBtnText("Dark Mode On")
}
}
    return (
    <>
    
    <div className="container" style={myStyle} >
<h1 className='my-3'>About</h1>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem modi dignissimos dolore tenetur libero eius sunt accusamus dolorem assumenda molestias, quia sit, esse enim veniam blanditiis neque quis dolorum. Deleniti! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis iure incidunt est culpa. Laboriosam a harum ea sit, et illo qui ipsa assumenda iure sapiente aut magni. Rerum quos, nostrum doloremque expedita iure quaerat!
    </div>
    <button onClick={toggleStyle} className="btn btn-secondary mx-2">{btnText}</button>
    </>
  )
}
