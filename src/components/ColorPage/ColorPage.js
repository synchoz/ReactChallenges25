import React, { useEffect, useState } from "react";
import './styles/style.css';



export default function ColorPage() {
    const [color, setColor] = useState('#000000');
    const [typeOfColor, setTypeOfColor] = useState('hex');

    function randomColorUtility(length) {
        return Math.floor(Math.random()*length);
    }

    function handleRandomHEXColorGenerate() {
        const hex = ['0','1','2','3','4','5','7','8','9','A','B','C','D','E','F'];
        let hexColor = '#'
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    }

    function handleRandomRGBColorGenerate() {
        const r = randomColorUtility(255);
            const g = randomColorUtility(255);
            const b = randomColorUtility(255);
            setColor(`rgb(${r},${g},${b})`);
    }
    useEffect(() => {
        typeOfColor === 'rgb' ? handleRandomRGBColorGenerate() : handleRandomHEXColorGenerate();
    },[typeOfColor]);

    return (
        <div className="pageContainer" style={{backgroundColor: color}}>
            <div className="containerBtns">
                <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={typeOfColor === 'rgb' ?  handleRandomRGBColorGenerate : handleRandomHEXColorGenerate}>Generate Random Color</button>
            </div>
            <h1 className="colorTextHeader">{color}</h1>
        </div>
    );
}