import React,{useState,useEffect} from "react"
import axios from "axios"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";
import AppContext from "./context"




function App() {
  const [items,setItems]=useState([])
  const [drawerItems,setDrawerItems]=useState([])
  const [favorites,setFavorites]=useState([])
  const [openDrawer,setOpenDrawer]=useState(false);
  const [searchInput,setSearchInput]=useState("")
  const [isLoading,setIsLoading]=useState(true)

  console.log(JSON.stringify(drawerItems))
  useEffect(()=>{
    async function fetchData(){      
      const cartResp= await axios.get("https://60e153115a5596001730f08d.mockapi.io/cart")      
      const favoritesResp=await axios.get("https://60e153115a5596001730f08d.mockapi.io/favorites")
      const itemsResp=await axios.get("https://60e153115a5596001730f08d.mockapi.io/items")
    
      setIsLoading(false)
      setDrawerItems(cartResp.data)
      setFavorites(favoritesResp.data)
      setItems(itemsResp.data)
    }

    fetchData()
  },[])

  const onAddToDrawer=(obj)=>{
    if(drawerItems.find(item=>Number(item.id)===Number(obj.id))){
      axios.delete(`https://60e153115a5596001730f08d.mockapi.io/cart/${obj.id}`)
      setDrawerItems(prev=>prev.filter(it=>Number(it.id)!==Number(obj.id)))
    }else{
      axios.post("https://60e153115a5596001730f08d.mockapi.io/cart",obj);
      setDrawerItems(prev=>[...prev,obj])
    }    
  }

  const onRemoveFromDrawer=(id)=>{
    axios.delete(`https://60e153115a5596001730f08d.mockapi.io/cart/${id}`);
    setDrawerItems(prev=>prev.filter(it=>it.id!==id))
  }

  const onAddToFavorites=async (obj)=>{
    try {
      if(favorites.find(favObj=>Number(favObj.id)===Number(obj.id))){
        axios.delete(`https://60e153115a5596001730f08d.mockapi.io/favorites/${obj.id}`);
        setFavorites(prev=>prev.filter(it=>Number(it.id)!==Number(obj.id)))
      }else{
        const {data} = await axios.post("https://60e153115a5596001730f08d.mockapi.io/favorites",obj);
        setFavorites(prev=>[...prev,data])
      }
    } catch (error) {
      alert("Не удалось добавить в фавориты")
    }    
  }

  const searchHandler=e=>{
    setSearchInput(e.target.value)
  }

  const isAddedItem=id=>{
    return drawerItems.some(obj=>Number(obj.id)===Number(id))
  }
  
  return (
    <AppContext.Provider value={{ items,drawerItems,favorites,isAddedItem,onAddToFavorites }}>
      <div className="wrapper clear">  
        {openDrawer&&<Drawer closeDrawer={()=>setOpenDrawer(false)} 
        items={drawerItems} onRemove={onRemoveFromDrawer}
      />}           
        <Header openDrawer={()=>setOpenDrawer(true)}/>

        <Route path="/" exact={true}>
          <Home 
            items={items}
            cartItems={drawerItems}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
            onAddToDrawer={onAddToDrawer}
            searchHandler={searchHandler}
            onAddToFavorites={onAddToFavorites}
            isLoading={isLoading}
          />

        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>   
      </div>
    </AppContext.Provider>


  );
}

export default App;
