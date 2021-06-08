import React from 'react'
import './CardAir.css'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function CardAir({ src, title, description, price }) {
    return (
        <div className="CardAir">
            <img src={src} alt="" />
            <div className="CardAir__info">
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
               <h1 className="star"> <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></h1>
            </div>
        </div>
    )
}

export default CardAir
