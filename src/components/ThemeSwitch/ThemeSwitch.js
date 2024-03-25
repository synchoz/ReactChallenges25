import React,{useState, button} from "react"
import './styles/style.css';

export default function ThemeSwitch () {
const [isCurrentThemeWhite, setIsCurrentThemeWhite] = useState(true);

const toggleTheme = () => {
    setIsCurrentThemeWhite(!isCurrentThemeWhite);
}
    return(
        <div className={isCurrentThemeWhite ? 'mainScreen backgroundColorWhite': 'mainScreen backgroundColorDark'}>
            <div className="themeWrapper">
                <div className="themeWrapperItem themeTitle">Hello World !</div>
                <div className="themeWrapperItem">
                    <div className="themeBtn" onClick={toggleTheme}>Change Theme</div>
                </div>
            </div>
        </div>
    )
}