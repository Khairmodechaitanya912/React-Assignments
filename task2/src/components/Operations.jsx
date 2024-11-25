import React, { useRef } from 'react'

const Operations = () => {

    const reftext = useRef(null)

    const toUpperCase = () => {
        reftext.current.value = reftext.current.value.toUpperCase();
    }
    const toLowerCase = () => {
        reftext.current.value = reftext.current.value.toLowerCase();
    }
    const toCapitalizeCase = () => {
        reftext.current.value = reftext.current.value
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    }
    const toBold = () => {
        reftext.current.style.fontWeight =
            reftext.current.style.fontWeight === "bold" ? "normal" : "bold";
    }
    const toItalic = () => {
        reftext.current.style.fontStyle =
            reftext.current.style.fontStyle === "italic" ? "normal" : "italic";
    }
    const toUnderline = () => {
        reftext.current.style.textDecoration =
            reftext.current.style.textDecoration === "underline" ? "none" : "underline";
    }

    const ChangeColor = () => {
        const color = document.getElementById("colors").value;
        reftext.current.style.color = color;
    }
    const changeHighlightColor = () => {
        const highlight = document.getElementById("highlight").value;
        reftext.current.style.backgroundColor = highlight;
        //    reftext.current.value.style.backgroundColor = highlight;
    };

    const fontSize = () =>{
        const size = document.getElementById('fontsize').value
         reftext.current.style.fontSize = size + "px"
        // console.log(reftext.current.style.fontSize);
    }
    const copyToClipboard = () =>{
        let input = reftext.current.value
        window.navigator.clipboard.writeText(input)
    }
    return (
        <>
            <div className="container">
                <div className="heading">
                    <h1 className='text-center'>Text Editor</h1>
                </div>
                <div className="Btn-Section">
                    <div className="container text-center">
                        <textarea name="" id="" cols="60" rows="10" placeholder='Enter Somethings...!' ref={reftext} ></textarea>
                    </div>
                    <div className="Btn">
                        <button className='btn btn-primary' onClick={toUpperCase}>UPPERCASE</button>
                        <button className='btn btn-primary' onClick={toLowerCase}>lowercase</button>
                        <button className='btn btn-primary' onClick={toCapitalizeCase}>Capitalize</button>
                        <hr />
                        <button className='btn btn-primary' onClick={toBold}>Bold</button>
                        <button className='btn btn-primary' onClick={toItalic}>Italic</button>
                        <button className='btn btn-primary' onClick={toUnderline}>Underline</button>
                        <span className='vr'></span>
                        <input type="color" name="colors" id="colors" className='mx-4' onChange={ChangeColor} />
                        <input type="color" name="highlight" id="highlight" className='mx-5' onChange={changeHighlightColor} />
                        <div className="txt-colors">
                            <label htmlFor="txt-color">Text Color</label>
                            <label htmlFor="txt-color">Highlight Text</label>
                        </div>
                        <hr />
                        <select className="form-select" id='fontsize' aria-label="Font Size" onChange={fontSize}>
                            <option disabled defaultValue>Font Size</option>
                            <option value="8">8</option>
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="14">14</option>
                            <option value="18">18</option>
                            <option value="24">24</option>
                            <option value="30">30</option>
                            <option value="36">36</option>
                            <option value="48">48</option>
                            <option value="80">60</option>
                            <option value="72">72</option>
                            <option value="92">92</option>
                        </select>
                        <button className='btn btn-primary' onClick={copyToClipboard}>Copy To Clipboard</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Operations