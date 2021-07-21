
import React from 'react'
import AppContext from '../context'

const Info = ({title,image,desc}) => {
    const { setOpenDrawer } = React.useContext(AppContext)
    const closeDrawer=()=>{
        setOpenDrawer(false)
    }
    return (
        <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img 
                className="mb-20" style={{ width:"120px"}}
                src={image} 
                alt="empty_cart" 
            />
            <h2>{title}</h2>
            <p className="opacity-6">{desc}</p>
            <button className="greenBtn" onClick={closeDrawer}>
                <img src="/img/arrow.svg" alt="arrow_icon" />
                Вернутся назад
            </button>
        </div>
    )
}

export default Info
