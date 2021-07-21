import React from 'react'
import AppContext from '../context'


export const useCart=()=>{
    const {drawerItems,setDrawerItems}=React.useContext(AppContext)
    const basketItemsPrice=drawerItems.reduce((sum,obj)=>obj.price+sum,0)

    const taxAmount=basketItemsPrice*5/100;

    return {drawerItems, setDrawerItems, basketItemsPrice,taxAmount}
}