import React, {useState} from "react";
import './styles/style.css';

const arr = [
    {
        url:'https://img.freepik.com/free-photo/gathering-black-spheres-center-light-background-attraction-objects-with-long-shadows-magnetic-attraction-objects-central-formation-render_1217-2498.jpg?t=st=1709569490~exp=1709573090~hmac=a1c59eedaa9655a2ee6bb8230eddea297480b39e5adce10f74bbb5d5d07a03d6&w=1380'
    },
    {   url:'https://img.freepik.com/free-photo/colorful-padlocks_181624-26297.jpg?t=st=1709569594~exp=1709573194~hmac=905d8b362e48f4230082925a1c07370d31ba6776923577c165afdddd85389488&w=740'
    },
    {
        url: 'https://img.freepik.com/free-photo/blond-businessman-sad-expression_1194-3642.jpg?t=st=1709569624~exp=1709573224~hmac=0ca3453b69af53bfbb16911b365e09bbad9c93d56c1d2d83a978a96a0a15a8e7&w=740'
    },
    {
        url:'https://img.freepik.com/free-photo/crazy-man-sad-expression_1194-4988.jpg?t=st=1709569643~exp=1709573243~hmac=c01c0e8f1e6e6b673c85ed16da30195241e5a45cc5073a7161edd9b3256dca4f&w=740'
    },
    {
        url:'https://img.freepik.com/free-photo/rear-view-group-school-friends-walking-outdoors-lifestyle_53876-13469.jpg?t=st=1709569664~exp=1709573264~hmac=0d4fd3c5d797d67b34c34d181a5efa349a10bc64394c2f977e4226eea5e6d48d&w=740'
    }];

export default function ImageSlider() { 
    const [currImageIndex, setCurrImageIndex] = useState(0);
    const [currData, setCurrData] = useState(
        [...arr.map(val => ({...val, isActive: false}))]
    )

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
                <div className="imgC" style={{backgroundImage:`url(${arr[currImageIndex].url})`}}></div>
                <div className="btnContainer">
                    <div className="btn prevBtn"  onClick={moveToPrevImage}></div>
                    <div className="btn nextBtn" onClick={moveToNextImage}></div>
                </div>
                <div className="indexContainer">
                    {arr.map((data, index) => (
                        <div key={index} data-index={index} className={data.isActive ? "indicatorCircle active" : "indicatorCircle"} ></div>
                    ))}
                </div>
                    
            </div>
        </div>
    )
}