import React, {useState, useEffect} from "react";
import './styles/style.css';

export default function ImageSlider() { 
    const [currImageIndex, setCurrImageIndex] = useState(0);
    const [currData, setCurrData] = useState([])

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?page=2&limit=10')
            .then(res => res.json())
            .then((data) => {
                setCurrData([...data.map(val => ({...val, isActive:false}))]);
                console.log(data);
            })
    
    }, [])
    

    function moveToNextImage() {
        console.log(currData);
        let cpyCurrData = [...currData];
        cpyCurrData[currImageIndex].isActive = false;
        const imgIndex =  currImageIndex == cpyCurrData.length - 1 ? 0 : currImageIndex + 1;
        cpyCurrData[imgIndex].isActive = true;
        setCurrData(cpyCurrData);
        setCurrImageIndex(imgIndex);
    }
    function moveToPrevImage() {
        let cpyCurrData = [...currData];
        cpyCurrData[currImageIndex].isActive = false;
        const imgIndex =  currImageIndex == 0 ? cpyCurrData.length - 1 : currImageIndex - 1;
        cpyCurrData[imgIndex].isActive = true;
        setCurrData(cpyCurrData);
        setCurrImageIndex(imgIndex);
    }
    return(
        <div className="mainContainer">
            <div className="imageSliderContainer">
                <div className="imgC" style={{backgroundImage:`url(${currData[currImageIndex]?.download_url})`}}></div>
                <div className="btnContainer">
                    <div className="btn prevBtn"  onClick={moveToPrevImage}></div>
                    <div className="btn nextBtn" onClick={moveToNextImage}></div>
                </div>
                <div className="indexContainer">
                    {currData.map((data, index) => (
                        <div key={index} data-index={index} className={data.isActive ? "indicatorCircle active" : "indicatorCircle"} ></div>
                    ))}
                </div>
                    
            </div>
        </div>
    )
}