import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=> {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to upper case", "success ")
  }
  const handleLoClick = ()=> {
    let newText = text.toLocaleLowerCase();
    setText(newText)
    props.showAlert("converted to Lower Case", "success ");
  }
  const handleextraClick = ()=> {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Clir extra space", "success ");
  }
  const handleClClick = ()=> {
    let newText = ""
    setText("")
    props.showAlert("clir case", "success ");
  }
  const handleOnChange = (event)=> {
    setText(event.target.value);

  }
  const [text, setText] = useState('');

  
  return (
    <>
<div>
  <h2>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control" value={text} onChange={handleOnChange} id="my box" rows="8"></textarea>
</div>
<button className="btn btn-secondary mx-2" onClick={handleUpClick}>convert into Uppercase</button>
<button className="btn btn-secondary mx-2"  style={{margin:'2vh'}} onClick={handleLoClick}>convert into Lowercase</button>
<button className="btn btn-secondary mx-2" style={{margin:'2vh'}} onClick={handleextraClick}>Clir extra space</button>
<button className="btn btn-secondary mx-2" onClick={handleClClick}>Clir case</button>
</div>
<div className="container my-2">
  
  <h3>your summary</h3>
  <p>{text.split(" ").length-1} words and {text.length} characters</p>
  <p>{0.008 * text.split(" ").length} minutes read</p>
  <h3>preview</h3>
  <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
  </div>
   </>
  )
}
