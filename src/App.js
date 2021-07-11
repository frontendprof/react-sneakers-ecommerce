import React,{useState,useEffect} from "react"
import axios from "axios"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Drawer from "./components/Drawer"




function App() {
  const [items,setItems]=useState([])
  const [drawerItems,setDrawerItems]=useState([])
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
    console.log(id)
    // axios.delete(`https://60e153115a5596001730f08d.mockapi.io/cart/${id}`);
    setDrawerItems(prev=>prev.filter(item=>item.id!==id))
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
            {items
            .filter(item=>item.title.toLowerCase().includes(searchInput))
            .map(i=>(
              <Cart title={i.title} price={i.price} imageUrl={i.imageUrl} key={i.title}
                onPlus={(obj)=>onAddToDrawer(i)} 
              />
            ))}
        </div>

      </div>
    
    </div>

  );
}

export default App;
