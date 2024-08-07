import React, { useState } from 'react';

export const TextForm = (props) => {
    const [text, setText] = useState(" ");

    const handleUpClick = () => {
        console.log("Uppercase was clicked: " + text);
        let newText = text?.toUpperCase();
        setText(newText);
    }

    const handleChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
   const handleLoClick = () =>{
    // console.log("Uppercase was clicked: " + text);
    let newText = text?.toLowerCase();
    setText(newText);
   }
   const handleClearClick =()=>{
    let newText = "";
    setText(newText);
   }
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleChange} id="myBox" rows="3"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>
        <div className='container'>
            <h1>Your text summary</h1>
            <p>{text?text.split(" ").length:0} words and {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}

