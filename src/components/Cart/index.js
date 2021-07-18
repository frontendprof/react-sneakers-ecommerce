
import React,{useState} from 'react'
import ContentLoader from "react-content-loader"
import AppContext from '../../context'

import styles from "./Cart.module.scss"



const Cart = ({id,title,price,imageUrl,onPlus,onFavorite,favorited=false,loading=false}) => {

  const {isAddedItem}=React.useContext(AppContext)
  const [isFavorite,setIsFavorite]=useState(favorited);

  const onIconClick=()=>{
    onPlus({id,title,price,imageUrl})
  }

  const favoriteHandler=()=>{
    onFavorite({title,price,imageUrl,id})
    setIsFavorite(!isFavorite)
  }
    return (
        
      <div className={styles.card}>
         {loading ? (
           <ContentLoader 
           speed={2}
           width={165}
           height={250}
           viewBox="0 0 155 265"
           backgroundColor="#f3f3f3"
           foregroundColor="#ecebeb"
         >
           <rect x="0" y="0" rx="10" ry="10" width="155" height="155" /> 
           <rect x="0" y="167" rx="5" ry="5" width="155" height="15" /> 
           <rect x="0" y="187" rx="5" ry="5" width="100" height="15" /> 
           <rect x="0" y="234" rx="5" ry="5" width="80" height="25" /> 
           <rect x="120" y="230" rx="10" ry="10" width="35" height="35" />
         </ContentLoader>
         ):(
           <>
            <div className={styles.favorite} onClick={favoriteHandler}>
              <img src={isFavorite?"/img/liked.svg":"/img/unliked.svg"} alt="heart_unliked_icon" />
            </div>
          
            <img src={imageUrl} alt="sneaker_one" width="100%" height={135}/>
            <h5>{title}</h5>
          
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>{price} руб.</b>
              </div>
              <img className={styles.plus}
                onClick={onIconClick}
              src={isAddedItem(id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg" } alt="btn_plus_icon"                
              />            
            </div>
          </>
         )}
      </div>
        
    )
}

export default Cart
