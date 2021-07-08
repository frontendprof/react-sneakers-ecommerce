import React from 'react'

const Drawer = ({closeDrawer,items}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">
                Корзина
                <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove_icon" onClick={closeDrawer}/>
                </h2>

                <div className="items">

                    {items.map(obj=>(
                        <div className="cartItem d-flex align-center mb-20" key={obj.title}>
                            <div className="cartItemImg" style={{ backgroundImage:`url(${obj.imageUrl})` }}></div>

                            <div className="mr-20 flex">
                            <p className="mb-5">{obj.title}</p>
                            <b>{obj.price} руб.</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove_icon" />
                        </div>
                    ))}

                

        
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
