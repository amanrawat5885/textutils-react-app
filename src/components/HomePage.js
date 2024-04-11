import React, {useState} from 'react'

function HomePage(props) {

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }

    const textUpper = () => {
        let newTxt = text.toUpperCase();
        setText(newTxt);
    }
    const textLower = () => {
      let newTxt = text.toLowerCase();
      setText(newTxt);
  }

    const [text, setText] = useState();
  return (
    <div>
      <div className={`container mb-3 text-${props.mode==='light'?'dark':'light'}`}>
        <label htmlFor="Textarea" className="form-label"><h3>Enter your text below</h3></label>
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} value={text} rows="8"></textarea>
        <button type="button" onClick={textUpper} className="btn btn-primary btn-sm my-3">Convert to Upper</button>
        <button type="button" onClick={textLower} className="btn btn-primary btn-sm my-3 mx-3">Convert to Lower</button>
      </div>

      <div className='container'>
        <h4>Text Summary</h4>
        <p>words count is </p>
        <p>text count is {text}</p>
      </div>
    </div>
  )
}

export default HomePage
