import React from 'react'
import { Link } from "react-router-dom";



const Header = ({openDrawer}) => {
    return (
        
        <header className="d-flex justify-between align-center p-40">

            <div className="d-flex align-center">
                <Link to="/">
                    <img src="/img/logo.png" alt="main_logo" width={40} height={40} />
                </Link>
                <div>
                    <h3 className="text-uppercase">React Sneakers</h3>
                    <p className="opacity-5">Магазин лучших кроссовок</p>
                </div>               
            </div>

            <ul className="d-flex">
            <li className="mr-30 cu-p" onClick={openDrawer}>
                <img src="/img/cart.svg" alt="cart_img" width={18} height={18} />
                <span>1205 руб.</span>
            </li>

            <li className="mr-20 cu-p">
                <Link to="/favorites">
                    <img src="/img/heart.svg" alt="favs_img" width={18} height={18} />                
                </Link>
            </li>

            <li>
                <img src="/img/user.svg" alt="user_img" width={18} height={18} />
            </li>
            </ul>
        </header>
        
    )
}

export default Header
