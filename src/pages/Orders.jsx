
import React from 'react'
import Cart from "../components/Cart"
import axios from "axios"
import AppContext from '../context'


const Orders = () => {
    const {onAddToDrawer,onAddToFavorites}=React.useContext(AppContext)
    const [isLoading,setIsLoading]=React.useState(true)

    const [orders,setOrders]=React.useState([])
    React.useEffect(()=>{
        (async ()=>{
            try {
                const {data}=await axios.get("https://60e153115a5596001730f08d.mockapi.io/orders")
                // console.log(data.map(obj=>obj.items).flat())
                setOrders(data.reduce((prev,obj)=>[...prev,...obj.items],[]))
                setIsLoading(false)
            } catch (error) {
                alert("Ошибка при запросе заказов")
            }
        })()
    },[])
    return (
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1>Мои покупки</h1>
            </div>
        
            <div className="d-flex flex-wrap">
                {isLoading ? [...Array(12)] : orders.map((i,ind)=>(
                    <Cart 
                        {...i}
                        onFavorite={(obj)=>onAddToFavorites(obj)}
                        onPlus={(obj)=>onAddToDrawer(obj)}
                        key={ind}
                        loading={isLoading} 
                    />
                ))}
            </div>
      </div>
    )
}

export default Orders
