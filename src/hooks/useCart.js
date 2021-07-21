import React from 'react'
import AppContext from '../context'


export const useCart=()=>{
    const [drawerItems,setDrawerItems]=React.useContext(AppContext)
    const basketItemsPrice=drawerItems.reduce((sum,obj)=>obj.price+sum,0)

    return {drawerItems, setDrawerItems, basketItemsPrice}
}