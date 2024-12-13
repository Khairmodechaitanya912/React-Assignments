import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [input,setInput] = useState('');
    // const [qrText,setQRText] = useState('');

    // const generateQRCode = () => {
    //     setQRText(input)
    // }
    return (
        <>
            <div className="w-50 mx-auto">
                <h1 className='text-center text-primary my-4'>QR Code Generator</h1>
                <input type="text" className='form-control border border-secondary mb-4' placeholder='Enter text here...' onChange={e => setInput(e.target.value)} value={input}/>
                {/* <div className="d-flex justify-content-center">
                    <button className='btn btn-success' onClick={generateQRCode}>Generate</button>
                </div> */}
            </div>

            {(input !== '')? <div className="text-center mt-5">
            <QRCode value={input}/>
            </div>
            : ''    
        }
        </>
    )
}

export default QrCodeGenerator