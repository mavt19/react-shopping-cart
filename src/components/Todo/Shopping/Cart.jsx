import React, { useState, useEffect } from 'react'
import CartItem from './CartItem'

const Cart = (props) => {
    const initialState = JSON.parse(window.localStorage.getItem('items'))
    const {initialItems} = props
    const [items, setItems] = useState(initialState || initialItems)
    const [count, setCount] = useState(1)
    useEffect(() => {
       window.localStorage.setItem('items',JSON.stringify(items))
    }, [items])



    const updateQty = (id, newQty) =>{
        const newItems = items.map(item=>{
            if(item.id === id){
                return {...item, qty: newQty }
            }
            return item
        })
        setItems(newItems)
    }
    
    const garntTotal = items.reduce((total, item)=>(
         total+item.qty * item.price
    ),0).toFixed(2)

    return (
        <div className="Cart">
        <button onClick={()=> setCount(count+1)}>{count}</button>
            <h1 className="Cart-title">Shopping Cart </h1>
            <div className="Cart-items">
            {items.map(item=>(
                <CartItem {...item} key={item.id} updateQty={updateQty}/>
            ))}
            </div>
                <h2 className="Cart-total">Grant Total : {garntTotal}</h2>
        </div>
    )
}

export default Cart


