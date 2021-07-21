import React from 'react'
import Info from './Info'
import axios from "axios"
import { useCart } from '../hooks/useCart'

const delay=(ms)=>new Promise(resolve=>setTimeout(resolve,ms))

const Drawer = ({closeDrawer,items,onRemove}) => {

    const {drawerItems,setDrawerItems,basketItemsPrice,taxAmount}=useCart()
    const [isOrderComplete,setIsOrderComplete]=React.useState(false)
    const [orderId,setOrderId]=React.useState(null)
    const [isLoading,setIsLoading]=React.useState(false)



    const onClickComplete=async()=>{
       try {
            setIsLoading(true)
            const {data}=await axios.post("https://60e153115a5596001730f08d.mockapi.io/orders",{
                items:drawerItems,
            })
            
            setOrderId(data.id)
            setIsOrderComplete(true)
            setDrawerItems([])
            for(let i=0;i<drawerItems.length;i++){
                const item=drawerItems[i]
                await axios.delete("https://60e153115a5596001730f08d.mockapi.io/cart/" + item.id);
                await delay(1500)
            }
       } catch (error) {
           alert("Ошибка при создании заказа!")
       }
       setIsLoading(false)
    }

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="mb-30 d-flex justify-between ">
                Корзина
                <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="remove_icon" onClick={closeDrawer}/>
                </h2>
                {
                    items.length>0?
                        (<>
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
                                    <b>{basketItemsPrice} рубл.</b>
                                    </li>

                                    <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{taxAmount} рубл.</b>
                                    </li>

                                </ul>

                                <button disabled={isLoading} onClick={onClickComplete} className="greenBtn">Оформить заказ
                                    <img src="/img/arrow.svg" alt="arrow_icon" />
                                </button>
                            </div>
                        </>):
                        <Info 
                            title={isOrderComplete?"Заказ оформлен" : "Корзина пустая"}
                            image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}
                            desc={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставки `:"Добавьте хотя бы одну пару кроссовок чтобы сделать заказ"}
                        />
                }
            </div>
        </div>
    )
}

export default Drawer
