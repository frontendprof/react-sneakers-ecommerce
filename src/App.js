import React from "react"



function App() {
  return (
    <div className="wrapper">
      <header>

        <div className="headerLeft">
          <img src="/img/logo.png" alt="main_logo" />
          <div className="headerInfo">
            <h3>React Sneakers</h3>
            <p> магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight">
          <li>
            <img src="/img/cart.svg" alt="cart_img" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src="/img/user.svg" alt="user_img" />
          </li>
        </ul>
      </header>

      <div className="content">
        <h1>Все кроссовки</h1>
        ...
      </div>
    </div>
  );
}

export default App;
