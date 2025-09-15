import { useCart } from "../context/CartContext";
import "../styles/CartPage.css";

const CartPage = () => {
  const {cartItems, removeFromCart } = useCart();

  const handleRemove = (id) => {
    removeFromCart({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {!cartItems || cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map(item => (
          <div key={item._id}  className="cart-item">
            <h4>{item.name}</h4>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemove(item._id)}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
};

export default CartPage;
