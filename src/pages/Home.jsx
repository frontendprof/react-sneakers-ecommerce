
import React from 'react'
import Cart from "../components/Cart"



const Home = ({items,searchInput,setSearchInput,onAddToDrawer,searchHandler,onAddToFavorites,isLoading}) => {
    

    const renderItems=()=>{
        const filteredItems=items?.filter(item=>item.title.toLowerCase().includes(searchInput))
        return(isLoading?[...Array(10)]:filteredItems)
                .map((i,ind)=>(
                <Cart 
                    key={ind}
                    {...i} 
                    onPlus={(obj)=>onAddToDrawer(i)} 
                    onFavorite={(obj)=>onAddToFavorites(obj)}
                    loading={isLoading}
                />
                )
        )
    }
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
                {renderItems()}
            </div>
      </div>
    )
}

export default Home
