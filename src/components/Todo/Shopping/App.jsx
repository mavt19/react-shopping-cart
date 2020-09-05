import React from 'react'
import Cart from './Cart'
import '../../../assets/css/Cart.css'
const items =[
    {id: 1, name: 'Taco Seasoning', price: 2.25, qty: 2},
    {id: 2, name: 'Pinto Beans', price: 1.99, qty: 3},
    {id: 3, name: 'Sour Cream', price: 3.50, qty: 1},
]
const App = () => {
    return (<div className="cart">
            <Cart initialItems={items}/>
            </div>
    )
}

export default App
