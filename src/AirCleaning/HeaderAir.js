import React from 'react'
import './HeaderAir.css'
import img from '../images/img3.jpg'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar } from '@material-ui/core';

function HeaderAir() {
    return (
        <div className="HeaderAir">
            {/* <img className="header__icon" src={img} alt=""/>  */}

            <div className="header__center">
               {/* <input type="text" /> 
               <SearchIcon/> */}
            </div>

            <div className="header__right">
                {/* <p>Become a host</p>
                <LanguageIcon/>
                <ExpandMoreIcon/>
                <Avatar /> */}
            </div>
        </div>
    )
}

export default HeaderAir
