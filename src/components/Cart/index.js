
import React,{useState} from 'react'

import styles from "./Cart.module.scss"



const Cart = ({id,title,price,imageUrl,onPlus,onFavorite,favorited=false,added=false}) => {
  const [iconChange,setIconChange]=useState(added);
  const [isFavorite,setIsFavorite]=useState(favorited);

  const onIconClick=()=>{
    onPlus({id,title,price,imageUrl})
    setIconChange(!iconChange)
  }

  const favoriteHandler=()=>{
    onFavorite({title,price,imageUrl,id})
    setIsFavorite(!isFavorite)
  }
    return (
        <div>
            
            <div className={styles.card}>
              <div className={styles.favorite} onClick={favoriteHandler}>
                <img src={isFavorite?"/img/liked.svg":"/img/unliked.svg"} alt="heart_unliked_icon" />
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
