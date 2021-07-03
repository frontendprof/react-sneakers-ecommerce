
import React,{useState} from 'react'

import styles from "./Cart.module.scss"



const Cart = ({title,price,imageUrl}) => {
  const [iconChange,setIconChange]=useState(false);

  const onIconClick=()=>{
    setIconChange(!iconChange)
  }
    return (
        <div>
            
             <div className={styles.card}>
            <div className={styles.favorite}>

            <img src="/img/unliked.svg" alt="heart_unliked_icon" />
            </div>
            <img src={imageUrl} alt="sneaker_one" width={133} height={112}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>{price} руб.</b>
              </div>
              <img className={styles.plus}
                onClick={onIconClick}
               src={iconChange ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="btn_plus_icon"
               
               />
              
            </div>
          </div>
        </div>
    )
}

export default Cart