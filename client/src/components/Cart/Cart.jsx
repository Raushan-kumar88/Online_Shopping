import "./Cart.scss";
import CartItem from './CartItem/CartItem'
import {MdClose} from 'react-icons/md'
import {BsCartX} from 'react-icons/bs'
import { useContext } from "react";
import { Context } from "../../utils/context";
import {loadStripe} from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api";
const Cart = ({setshowCart}) => {
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };


    return <div className="cart-panel">
        <div className="opac-layer" onClick={() => setShowCart(false)}></div>
        <div className="cart-content">
            <div className="cart-header">
                <span className="heading">Shopping Cart</span>
                <span className="close-btn" onClick={() => setshowCart(false)}>
                    <MdClose/>
                    <span className="text">close</span>
                </span>
            </div>
            {!cartItems.length && (
            <div className="empty-cart">
                <BsCartX />
                <span>No product of the cart.</span>
                <button className="return-btn" onClick={() => setshowCart(false)}>RETURN TO SHOP</button>
            </div>
            )}
            
            {!!cartItems.length && (
            <>
                <CartItem/>
                <div className="cart-footer">
                    <div className="subtotal">
                        <span className="text">SubTotal</span>
                        <span className="text total">&#8377;{cartSubTotal}</span>
                    </div>
                    <div className="button">
                        <button className="checkout-btn" onClick={handlePayment}>CheckOut</button>
                    </div>
                </div>
            </>
            )}
        </div>
    </div>;
};

export default Cart;
