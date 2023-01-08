import React, { useCallback } from "react";
import './style/address.css';
import { connect } from "react-redux";
import useRazorpay from "react-razorpay";
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, delCart } from '../../redux/actions/MedicineShoping';


const Address = ({ items, IncreaseQuantity, DecreaseQuantity, DeleteCart, handleClose, delCart }) => {

    //  console.log(items)
    let ListCart = [];
    let TotalCart = 0;
    Object.keys(items.Carts).forEach(function (item) {
        TotalCart += items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
    });

    return (
        <>
            <div className="address-container">
                <div className="payment_details">
                    <h1>Payment Information</h1>
                    <div className="address-details_card">
                        <div className="name_address">
                            <div className="first_lastName">
                                <input type="text" placeholder="First Name" />
                                <input type="text" placeholder="Last Name" />
                            </div>
                            <div className="address">
                                <input
                                    type="text"
                                    onkeyup="change()"
                                    id="put"
                                    placeholder="Address"
                                />
                                <input type="number" placeholder="Pincode" />
                                <input type="text" placeholder="Country" />
                                <input type="text" placeholder="State" />
                            </div>
                        </div>

                        <h1>Shipping Details</h1>
                        <div className="shipping_card">
                            <div className="new_card">
                                <h4>Same as personal</h4>
                                <p id="output">Bharat House Siwan Samachar Road</p>
                                <p>841230</p>
                            </div>
                            <div className="add_savedcard">
                                <h4>Saved Address</h4>
                                <p>Siwan, Bihar (west)</p>
                                <p>841235</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order_summary">
                    <h1>Order Summary</h1>
                    <div className="address-summary_card">
                        <div>
                            {ListCart.length ?
                                ListCart.map((item, key) => {
                                    return (
                                        <div className="address-card_item" key={item.id}>
                                            <div className="product_img">
                                                <img
                                                    src={item.preview}
                                                    alt={item.name}
                                                />
                                            </div>
                                            <div className="product_info">
                                                <p>{item.name}</p>
                                                {/* <p>Lorem Ipsum is simply dummy text.</p> */}
                                                <div className="close-btn">
                                                    <i className="fa fa-close" />
                                                </div>
                                                <div className="product_rate_info">
                                                    <h1>{item.price}</h1>
                                                    <span className="pqt-minus" onClick={() => DecreaseQuantity(key)}>-</span>
                                                    <span className="pqt">{item.quantity}</span>
                                                    <span className="pqt-plus" onClick={() => IncreaseQuantity(key)}>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : <h3>No items Found !</h3>}
                        </div>

                        <hr />
                        <div className="order_price">
                            <p>Order summary</p>
                            <h4>0</h4>
                        </div>
                        <div className="order_service">
                            <p>Additional Service</p>
                            <h4>0</h4>
                        </div>
                        <div className="order_total">
                            <p>Total Amount</p>
                            <h4>{Number(TotalCart).toLocaleString('en-US')}</h4>
                        </div>
                    </div>
                    <button className="proced_payment">
                        Procced to payment
                    </button>
                </div>
            </div>
        </>

    )
}

const mapStateToProps = state => {
    //  console.log(state)
    return {
        items: state.ShopApp
    }
}

export default connect(mapStateToProps, { IncreaseQuantity, DecreaseQuantity, DeleteCart })(Address)