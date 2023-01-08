import React from 'react';
import './style/cart.scss';
import { connect } from "react-redux";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, delCart } from '../../redux/actions/MedicineShoping';
import Button from '@material-ui/core/Button';
import { Redirect, Link, useHistory } from 'react-router-dom';

const Carts = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart, handleClose, delCart }) => {
    const history = useHistory();

    //  console.log(items)
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });


    const handleCheckout = () => {
        localStorage.setItem('myData', JSON.stringify(ListCart));
        // DeleteCart()
        history.push("/address");
    };

    return (
        <div className='shopping-cart_container'>
            <div className="shopping-cart">
                <div className="column-labels">
                    <label className="product-image">Image</label>
                    <label className="product-details">Product</label>
                    <label className="product-price">Price</label>
                    <label className="product-quantity">Quantity</label>
                    <label className="product-removal">Remove</label>
                    <label className="product-line-price">Total</label>
                </div>
                {
                    ListCart.map((item, key) => {
                        return (
                            <div className="product" key={item.id}>
                                <div className="product-image">
                                    <img src={item.preview} />
                                </div>
                                <div className="product-details">
                                    <div className="product-title">{item.name}</div>
                                    <p className="product-description">
                                        {item.name}
                                    </p>
                                </div>
                                <div className="product-price">{item.price}</div>
                                <div className="product-quantity">
                                    <Button size="small" color="primary" style={{ color: "#fff", backgroundColor: "blue", fontSize: '20px', margin: '4px' }} onClick={() => IncreaseQuantity(key)}>+</Button>
                                    <p style={{ margin: 'auto', width: '50%' }}>{item.quantity}</p>
                                    {/* <input type="number" value={item.quantity} min="1" style={{margin: 'auto',width: '50%'}} /> */}
                                    <Button size="small" color="primary" style={{ color: "#fff", backgroundColor: "red", fontSize: '20px', margin: '4px' }} onClick={() => DecreaseQuantity(key)}>-</Button>
                                </div>
                                <div className="product-removal">
                                    <button className="remove-product" onClick={() => delCart(item.id)}>Remove</button>
                                </div>
                                <div className="product-line-price">{item.price * item.quantity}</div>
                            </div>
                        )
                    })}

                <div className="totals">
                    <div className="totals-item">
                        <label>Subtotal</label>
                        <div className="totals-value" id="cart-subtotal">
                            {Number(TotalCart).toLocaleString('en-US')}
                        </div>
                    </div>
                    <div className="totals-item">
                        <label>Tax (5%)</label>
                        <div className="totals-value" id="cart-tax">
                            {Number(TotalCart).toLocaleString('en-US') - 3.60}
                        </div>
                    </div>
                    <div className="totals-item">
                        <label>Shipping</label>
                        <div className="totals-value" id="cart-shipping">
                            {ListCart.length}
                        </div>
                    </div>
                    <div className="totals-item totals-item-total">
                        <label>Grand Total</label>
                        <div className="totals-value" id="cart-total">
                            {Number(TotalCart).toLocaleString('en-US')}
                        </div>
                    </div>
                </div>
                <button className="checkout" onClick={handleCheckout}>Checkout</button>
            </div>
        </div>


    )
}

const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state.ShopApp
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Carts)