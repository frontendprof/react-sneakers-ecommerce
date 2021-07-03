import React from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Drawer from "./components/Drawer"



const arr=[
  {
    title:"Мужские Кроссовки Nike Blazer Mid Suede",
    price:12999,
    imageUrl:'/img/sneakers/1.jpg',
  },
  {
    title:"Мужские Кроссовки Nike Random Run Z",
    price:15600,
    imageUrl:'/img/sneakers/2.jpg',
  },
  {
    title:"Мужские Кроссовки Nike Air Max 270",
    price:8499,
    imageUrl:'/img/sneakers/3.jpg',
  },
  {
    title:"Кроссовки Puma X Aka Boku Future Rider",
    price:8999,
    imageUrl:'/img/sneakers/4.jpg',
  },
]

function App() {
  return (
    <div className="wrapper clear">     
        <Drawer />
        <Header/>


      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search_icon" />
            <input type="text" placeholder="Поиск ..." />
          </div>
        </div>
        
        <div className="d-flex">
            {arr.map(i=>(
              <Cart title={i.title} price={i.price} imageUrl={i.imageUrl} key={i.title} />
            ))}
        </div>

      </div>
    
    </div>

  );
}

export default App;
