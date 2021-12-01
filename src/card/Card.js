import './card.css';
import {ReactComponent as Arrow} from "../assets/arrow_ic.svg";
import {useRef, useState} from "react";

function Card({title, description}) {
    const [isOpen, setOpen] = useState(false)
    const contentElem = useRef(null);

    function toggle(){
        if (isOpen){
            contentElem.current.style.maxHeight = null;
        } else {
            contentElem.current.style.maxHeight = contentElem.current.scrollHeight + "px";
        }
        setOpen(!isOpen)
    }
    return <div className="card-wrapper">
        <div className="header" onClick={toggle}>
            {title}
            <Arrow className={`arrow ${isOpen ? 'opened' : ''}`}/>
        </div>
        <div ref={contentElem} className={`content ${isOpen ? 'opened' : ''}`}>
            {description}
        </div>
    </div>
}

export default Card;
