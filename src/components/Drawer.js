import React from 'react'

const Drawer = ({closeDrawer,items,onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">
                Корзина
                <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove_icon" onClick={closeDrawer}/>
                </h2>
                {
                    items.length>0?
                        (<div className="d-flex flex-column flex">
                            <div className="items">
                                {items.map(obj=>(
                                    <div className="cartItem d-flex align-center mb-20" key={obj.id}>
                                        <div className="cartItemImg" style={{ backgroundImage:`url(${obj.imageUrl})` }}></div>

                                        <div className="mr-20 flex">
                                        <p className="mb-5">{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                        </div>
                                        <img 
                                            onClick={()=>onRemove(obj.id)}
                                            className="removeBtn" 
                                            src="/img/btn-remove.svg" 
                                            alt="remove_icon" 
                                        />
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
                        </div>):

                        (<div className="cartEmpty d-flex align-center justify-center flex-column flex">
                            <img 
                                className="mb-20" style={{ width:"120px", height:"120px" }}
                                src="/img/empty-cart.jpg" 
                                alt="empty_cart" 
                            />
                            <h2>Корзина пустая</h2>
                            <p className="opacity-6">Добавьте хотя бы одну пару кроссовок чтобы сделать заказ</p>
                            <button className="greenBtn" onClick={closeDrawer}>
                                <img src="/img/arrow.svg" alt="arrow_icon" />
                                Вернутся назад
                            </button>
                        </div>)
                }
            </div>
        </div>
    )
}

export default Drawer
