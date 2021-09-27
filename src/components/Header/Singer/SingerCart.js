import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './SingerCart.css'
import Cart from '../../Cart/Cart';
import CartTow from '../../CartTwo/CartTow';


const SingerCart = () => {

    //singers-state-declaration

    const [singers, setSingers] = useState([]);

    //cart-state-declaration

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./concert.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])

    //Event-Handler-function-to-add-item-by-using-spread-operator

    const handleAddToCart = (singer) => {
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
                                <div className="col-md-4" key={singer.key}>
                                    <Cart
                                        singer={singer}
                                        handleAddToCart={handleAddToCart}
                                    >
                                    </Cart>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>

                <div className="col-md-4 my-5">
                    <CartTow cart={cart}> </CartTow>
                </div>


            </div>
        </div>
    );
};

export default SingerCart;