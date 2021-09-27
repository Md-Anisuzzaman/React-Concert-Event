import React from 'react';

const CartTow = (props) => {

    const {cart} = props;
    let total = 0;
    for (const singer of cart){
        total = total + parseInt(singer.payment);
        
    }
    return (
        <div>
            <h2>Total Added: {props.cart.length} </h2>
            <h3>Total: {total} </h3>
            <h4>Name : {props.cart.name}</h4>

        </div>
    );
};

export default CartTow;