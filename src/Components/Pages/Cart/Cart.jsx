import React, { useContext } from "react";
import LayOut from "../../LayOut/LayOut";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../Product/ProductCard";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";
import { Link } from "react-router-dom";
import "./cart.css";

function Cart() {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  console.log(basket)

  return (
    <LayOut>
      <section className="cart_container">
        <div className="cart_inner">
          <h2>Hello</h2>
          <h3>Your Shopping Basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>Opps ! No items in your cart</p>
          ) : (
            basket?.map((item, i) => {
              return (
                <ProductCard
                  key={i}
                  product={item}
                  flex={true}
                  add_description={true}
                  add_button={false}
                />
              );
            })
          )}
        </div>
        {basket?.length !== 0 && (
          <div className="cart_subtotal">
            <div>
              <p>Subtotal ({basket?.length}items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This Order Contains a Gift</small>
            </span>
            <Link to={"/payments"}>Continue to CheckOut</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart;
