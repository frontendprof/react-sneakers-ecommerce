import React from 'react'

const Drawer = () => {
    return (
        <div style={{display:"none"}} className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">
                Корзина
                <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove_icon" />
                </h2>

                <div className="items">

                        {/* cart item */}
                <div className="cartItem d-flex align-center mb-20">
                    <div className="cartItemImg" style={{ backgroundImage:"url(/img/sneakers/1.jpg)" }}></div>

                    <div className="mr-20 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="remove_icon" />
                </div>

        
                </div>
                
                <div className="cartTotalBlock">
                    <ul>

                        <li>
                        <span>Итого:</span>
                        <div></div>
                        <b>22 000 рубл.</b>
                        </li>

                        <li>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1100 рубл.</b>
                        </li>

                    </ul>

                    <button className="greenBtn">Оформить заказ
                        <img src="/img/arrow.svg" alt="arrow_icon" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Drawer
