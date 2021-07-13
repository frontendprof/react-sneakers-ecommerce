
import React from 'react'
import Cart from "../components/Cart"



const Favorites = ({items,onAddToFavorites}) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои закладки</h1>
            </div>
        
            <div className="d-flex flex-wrap">
                {items?.map((i,ind)=>(
                    <Cart 
                        {...i}
                        onFavorite={onAddToFavorites}
                        key={ind}
                        favorited={true}
                    />
                ))}
            </div>
      </div>
    )
}

export default Favorites
