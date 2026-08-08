import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpclick = () => {
         setText ("HI MY NAME IS ISHITA")
         let newText = text.toUpperCase();
      console.log("Uppercase was clicked" + newText)
    }
    const handleLowclick = () => {
        setText ("hi my name is ishita")
        let newText = text.toLowerCase();
        console.log("Lowercase was clicked" + newText)
    }
    const handleOnChange = (event) =>{
        setText (event.target.value)
    }
    const [text, setText] = useState('Enter text here')
  return (
    <>
<div className="container">
     <h1>{props.heading}</h1> 
     <div className="mb-3">
     <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="6"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpclick}>Convert to Uppercase</button>
     <button className="btn btn-primary mx-1" onClick={handleLowclick}>Convert to Lowercase</button>
     <button className="btn btn-primary mx-1" onClick={() => setText('')}>Clear Text</button>
     <button className="btn btn-primary mx-1" onClick={() => {
         let newText = text.split('').reverse().join('');
         setText(newText);
     }}>Inverse</button>
</div>
<div className="container my-3">
  <h1>your text here</h1>
  <p> {text.split (" ").length} words and {text.length} characters</p>
  <p> {text.split (" ").length * 0.08} minutes read</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
</>
  )
    }