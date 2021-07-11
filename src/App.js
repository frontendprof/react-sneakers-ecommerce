import React,{useState,useEffect} from "react"
import axios from "axios"
import Header from "./components/Header"
import Drawer from "./components/Drawer"

import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Favorites from "./pages/Favorites";




function App() {
  const [items,setItems]=useState([])
  const [drawerItems,setDrawerItems]=useState([])
  const [favorites,setFavorites]=useState([])
  const [openDrawer,setOpenDrawer]=useState(false);
  const [searchInput,setSearchInput]=useState("")

  useEffect(()=>{
    axios.get("https://60e153115a5596001730f08d.mockapi.io/items")
    .then(res=>{ setItems(res.data) })

    axios.get("https://60e153115a5596001730f08d.mockapi.io/cart")
    .then(res=>{ setDrawerItems(res.data) })
  },[])

  const onAddToDrawer=(obj)=>{
    axios.post("https://60e153115a5596001730f08d.mockapi.io/cart",obj);
    setDrawerItems(prev=>[...prev,obj])
  }

  const onRemoveFromDrawer=(id)=>{
    axios.delete(`https://60e153115a5596001730f08d.mockapi.io/cart/${id}`);
    setDrawerItems(prev=>prev.filter(it=>it.id!==id))
  }

  const onAddToFavorites=(obj)=>{
    axios.post("https://60e153115a5596001730f08d.mockapi.io/favorites",obj);
    setFavorites(prev=>[...prev,obj])
  }

  const searchHandler=e=>{
    setSearchInput(e.target.value)
  }
  return (
    <div className="wrapper clear">  
      {openDrawer&&<Drawer closeDrawer={()=>setOpenDrawer(false)} 
        items={drawerItems} onRemove={onRemoveFromDrawer}
      />}           
      <Header openDrawer={()=>setOpenDrawer(true)}/>

      <Route path="/" exact>
        <Home 
          items={items}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onAddToDrawer={onAddToDrawer}
          searchHandler={searchHandler}
          onAddToFavorites={onAddToFavorites}
        />

      </Route>
      <Route path="/favorites">
        <Favorites 
            searchInput={searchInput} 
            setSearchInput={setSearchInput}
            searchHandler={searchHandler}
          />
      </Route>

    
    </div>

  );
}

export default App;
