
import React from 'react'

import Cart from "../components/Cart"

const Home = ({items,searchInput,setSearchInput,onAddToDrawer,searchHandler,onAddToFavorites}) => {
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>{searchInput? `Поиск по запросу: ${searchInput}` : "Все кроссовки" }</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search_icon" />
                    <input type="text" placeholder="Поиск ..." onChange={searchHandler} value={searchInput}/>
                    {searchInput&& <img className="clearBtn" src="/img/btn-remove.svg" alt="clear_icon" onClick={()=>setSearchInput("")}/>}
                    
                </div>
            </div>
        
            <div className="d-flex flex-wrap">
                {items?.filter(item=>item.title.toLowerCase().includes(searchInput))
                .map((i,ind)=>(
                <Cart title={i.title} price={i.price} imageUrl={i.imageUrl} key={ind}
                    onPlus={(obj)=>onAddToDrawer(i)} onFavorite={(obj)=>onAddToFavorites(obj)}
                />
                ))}
            </div>
      </div>
    )
}

export default Home
