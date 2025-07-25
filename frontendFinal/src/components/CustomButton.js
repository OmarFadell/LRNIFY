import React from "react";
import './CustomButton.css'
// import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline','btn--registernow', 'btn--signin', 'btn--login','btn--pay','btn--proceed','btn--beginnow']
const SIZES = ['btn--medium', 'btn--large', 'btn--largeRegNow','btn--largesignin','btn--largelogin','btn--balance','btn--credit','btn--largepay','btn--largeproceed','btn--largereport','btn--other'];
export const CustomButton = ({children, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        // <Link to='/signup' className='btn-mobile'>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        // {/* </Link> */}
    )
}