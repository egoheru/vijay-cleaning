import React from 'react'
import './Featured.css'
import { Link } from 'react-router-dom'
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Featured({
  title,
  info,
  link,
  path,
  image,
  order,
  background,
  color,
  className,
}) {
  return (
    <div className='featured' style={{ background }}>
      <div className='featured__left' style={{ order, color }}>
        <h1>{title}</h1>
        <h4>{info}</h4>
        <Link to={path} className={className}>
          {link}
        </Link>
      </div>
      <div className='featured__right'>
        <img src={image} alt='' />
        {/* <h1><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></h1> */}
      </div>
    </div>
  )
}

export default Featured
