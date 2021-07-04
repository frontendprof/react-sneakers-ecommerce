import React,{useState,useEffect} from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Drawer from "./components/Drawer"




function App() {
  const [items,setItems]=useState([])
  const [drawerItems,setDrawerItems]=useState([])
  const [openDrawer,setOpenDrawer]=useState(false);

  useEffect(()=>{
    fetch("https://60e153115a5596001730f08d.mockapi.io/items")
    .then(res=>{
      return res.json()
    }).then(items=>{
      setItems(items)
    })
  },[])

  const onAddToDrawer=(obj)=>{
    setDrawerItems(prev=>[...prev,obj])
  }

  return (
    <div className="wrapper clear">  
        {openDrawer&&<Drawer closeDrawer={()=>setOpenDrawer(false)} 
          items={drawerItems}
        />}           
        <Header openDrawer={()=>setOpenDrawer(true)}/>


      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search_icon" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>
        
        <div className="d-flex flex-wrap">
            {items.map(i=>(
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
