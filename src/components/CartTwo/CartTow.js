import React from 'react';
import './CartTow.css'

const CartTow = (props) => {

    const cart = props.cart;

    //Total-cart-item-addition

    let total = 0;
    for (const singer of cart) {
        total = total + parseInt(singer.payment);

    }
    return (
        <div>
            <h2>Total Added: {props.cart.length} </h2>
            <h3>Total: {total} </h3>
            <ul>
                {
                    cart.length > 0 &&
                    cart.map((item) => (
                        <li key={item.key + Math.random()}>
                            {item.name}

                        </li>
                    ))

                }
            </ul>


        </div>
    )
};

export default CartTow;