import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SingerCart.css'
import Cart from '../../Cart/Cart';
import CartTow from '../../CartTwo/CartTow';


const SingerCart = () => {

    const [singers, setSingers] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./concert.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])

    const handleAddToCart = (singer) => {
        //console.log(singer);
        const newCart = [...cart, singer];
        setCart(newCart);
    }

    
    return (

        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                    {
                        singers.map(singer => (
                            <div className="col-md-4">
                                <Cart 
                                key={singer.key}
                                singer={singer}
                                handleAddToCart = {handleAddToCart}
                                >   
                                </Cart>
                            </div>
                        )
                        )
                    }
                    </div>
                </div>

                <div className="col-md-4 my-5">
                    <CartTow cart = {cart}> </CartTow>
                </div>


            </div>
        </div>
    );
};

export default SingerCart;