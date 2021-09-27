import React from 'react';
import './Cart.css'

const Cart = (props) => {
    //console.log(props);      
    const { name, img, songtype, gender, payment, country } = props.singer;

       

    return (
        <div className="card my-4 border-secondary shadow-lg bg-body rounded">
            <div className="card-body">
                <img className="w-100 card-img" src={img} alt="" />
                <h5 className="my-3">Name: {name}</h5>
                <p>SongType: {songtype}</p>
                <p>Gender: {gender}</p>
                <p>Country: {country}</p>
                <p>Payment: {payment} TK</p>
                <button onClick={() => props.handleAddToCart(props.singer)} className="btn"><i className="fas fa-music"></i> Add to cart</button>
                <h2 className="my-2"><i className="fab fa-facebook-square"></i>  <i className="fab fa-twitter-square"></i>  <i className="fab fa-instagram"></i></h2>
            </div>

        </div>
    );
};

export default Cart;