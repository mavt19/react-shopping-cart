import React from 'react'

const CartItem = (props) =>{

    const {id, name, price, qty, updateQty} = props

    const addOne = () =>{
        updateQty(id, qty+1)
    }

    const removeOne = () =>{
        updateQty(id,qty-1)
    }
    return(

        <div className="CartItem" >
            <div>{name}</div>
            <div>${price}</div>
            <div>
            <button onClick={removeOne} disabled={qty<1}>-</button>
            {qty}
            <button onClick={addOne}>+</button>
            </div>
            <div>Total: {qty*price}</div>
        </div>

    )
}
export default CartItem