import React,{input,button,useState} from "react"
import QRCode from "react-qr-code"
import './styles/style.css'

export default function QRGenerator() {
    const [userInputText, setUserInputText] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleChange = (event) => {
        setUserInputText(event.target.value);
    }

    const generateQRCode = () => {
        setSubmittedText(userInputText);
    }
    return(
        <div>
            <div className="titleHeader">QR Code Generator</div>
            <div className="semiWrapper">
                <div>
                    <input  onChange={handleChange} 
                            value={userInputText}
                            id="userInputText">
                    </input>
                </div>
                <div>
                    <button onClick={generateQRCode}>Generate</button>
                </div>
            </div>
            <QRCode value={submittedText} />
        </div>
    )
}