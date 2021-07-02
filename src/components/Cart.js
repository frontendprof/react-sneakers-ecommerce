
import React from 'react'

const Cart = () => {
    return (
        <div>
            
             <div className="card">
            <div className="favorite">

            <img src="/img/unliked.svg" alt="heart_unliked_icon" />
            </div>
            <img src="/img/sneakers/1.jpg" alt="sneaker_one" width={133} height={112}/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена</span>
                <b>12 999 руб.</b>
              </div>
              <button className="button">
                <img src="/img/plus.svg" alt="plus_icon" width={11} height={11} />
              </button>
            </div>
          </div>
        </div>
    )
}

export default Cart
