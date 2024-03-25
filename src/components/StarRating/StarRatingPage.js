import './styles/style.css';
import React, {useState, useRef} from 'react';

export default function StarRatingPage() {
    const btn1 = useRef(null);
    const btn2 = useRef(null);
    const btn3 = useRef(null);
    const btn4 = useRef(null);
    const btn5 = useRef(null);
    const [btnArray, setBtnArray] = useState([btn1,btn2,btn3,btn4]);
    const [numOfRating, setNumOfRating] = useState();
    const [isClicked, setIsClicked] = useState(false);

    function addYellow(btnArray, event, isClickEvent = false) {
        btnArray.every((element, index) => {
            element.current.classList.remove('blackStarIcon');
            element.current.classList.add('yellowStarIcon');
            if (element.current == event.target) {
                isClickEvent ? setNumOfRating(index + 1): setNumOfRating(0);
                return false;
            }
            return true;
        });
    }

    function disableYellow(btnArray) {
        btnArray.forEach((element) => {
            element.current.classList.remove('yellowStarIcon');
            element.current.classList.add('blackStarIcon');
        });
    }

    const handleClick = event => {
        setIsClicked(true);
        var isClickEvent = true;
        addYellow(btnArray, event, isClickEvent);
    }

    const handleHoverIn = event => {
        if(!isClicked) {
            addYellow(btnArray, event);
        }
        
    }

    const handleHoverOut = event => {
        console.log(numOfRating);
        if (!isClicked) {
            disableYellow(btnArray);
        }
        
    }
    return(
        <div className='container'>
            <div className='blackStarIcon iconGen' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} ref={btn1} onClick={handleClick} data-test-id="my-btn1"></div>
            <div className='blackStarIcon iconGen' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} ref={btn2} onClick={handleClick} data-test-id="my-btn2"></div>
            <div className='blackStarIcon iconGen' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} ref={btn3} onClick={handleClick} data-test-id="my-btn3"></div>
            <div className='blackStarIcon iconGen' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} ref={btn4} onClick={handleClick} data-test-id="my-btn4"></div>
            <div className='blackStarIcon iconGen' onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut} ref={btn5} onClick={handleClick} data-test-id="my-btn5"></div>
        </div>
    );
}