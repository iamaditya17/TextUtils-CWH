import React,{useState} from 'react'


export default function Textform(props) {

 // Declare a new state variable, which we'll call "text"
    const [text, setText] = useState("Enter the text");  // first parameter = state variable , second parameter = updation variable(what will happen)   , useState contains the default value
    
    const UPPERCASE = () => {
        
        // console.log("Uppercase was clicked");
        console.log("Entered text is: " + text);
        let upperText = text.toUpperCase();
        setText(upperText);
    }

    const LOWERCASE = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
    }

    const clearText = () => {
        setText("");
    }

    const copyText = () => {
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value)
        document.getSelection().removeAllRanges(); //to remove all the selected text
    }

    const handleOnChange = (event) => {
        setText(event.target.value);    //updating the changing text
    }

    return (
      <>
      <div>
                <h2 className={`container-text-${props.mode}`}>{props.heading}</h2>
          <div className="form-group my-3">
              <textarea className="form-control my-3" value={text} onChange={handleOnChange}
                  id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode === "dark" ? "black" : "white" , color: props.mode === "dark" ? "white" : "black"}}></textarea>
          </div>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={UPPERCASE}>Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={LOWERCASE}>Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={clearText}>Clear Text</button>
                <button disabled = {text.length === 0} className="btn btn-primary mx-2 my-1" onClick={copyText}>Copy</button>
            </div>
            
            <div className="container my-2">
                <h2 className={`container-text-${props.mode}`}>Your text summary</h2>
                {/* <p className={`container-text-${props.mode}`}>{text.split(" ").length} words {text.length} characters</p> */}

                {/* <p className={`container-text-${props.mode}`}>{text === "" ? 0 : text.split(" ").length} words {text.length} characters</p> */}
                
                <p className={`container-text-${props.mode}`}>{text.split(/\s+/).filter((element) => {
                    return element.length !== 0}).length} words {text.length} characters</p>

                <p className={`container-text-${props.mode}`}>{0.008 * text.split(" ").filter((element) => {
                    return element.length !== 0}).length} mintutes needed to read</p>

                <h2 className={`container-text-${props.mode}`}>Preview</h2>
                <p className={`container-text-${props.mode}`}>{text.length > 0 ? text : "Enter something in the above textbox to preview it here !!"}</p>
            </div>
            

        </>
    )
}



//hooks are used to use the feature of class without using the class.
//filter always take a function ; if that function returns true then it will filtered otherwise not