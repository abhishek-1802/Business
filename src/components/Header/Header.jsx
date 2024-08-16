import React from 'react'
import './Header.css'
import {assets} from '../../assets/assets'

export const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <img src={assets.header_img} alt="" />
            <h2>Oder your favourite items here</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus, a?</p>
            <button>View Menu</button>
        </div>
    </div>
  )
}
