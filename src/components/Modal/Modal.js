import React, {useState} from "react";
import ModalWindow from "./ModalWindow";
import './style.css'


export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(false);
    }

    return(
        <div className={'fullWinHeight'}>
            <button onClick={() => setIsOpen(true)}>Open Modal</button>
            {isOpen && <ModalWindow 
                            onClose={onClose} 
                            body={<div>This is Customized Body!</div>}
                            footer={<div className="textHeadFooter">custom footer Text</div>}
                        />}
        </div>
    )
}