import React, { useContext, useState } from "react";
import LayOut from "../../LayOut/LayOut";
import "./payment.css";
import { DataContext } from "../../DataProvider/DataProvider";
import ProductCard from "../../../Components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from "../../CurrencyFormat/CurrencyFormat";

function Payment() {
  const [{ user, basket }] = useContext(DataContext);

  const [cardError, setCardError] = useState(null);

  // console.log(basket);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elemets = useElements();

  const handleChange = (e) => {
    // console.log(e)
    e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
  };

  return (
    <LayOut>
      {/*header*/}
      <div className="payment_header">CheckOut ({totalItem}) items</div>

      <section className="payment_section">
        {/* address */}
        <div className="payment_flex">
          <h3>Delivery Address</h3>
          <div>
            <div> {user?.email}</div>
            <div>123 react laen</div>
            <div> chicago, ti</div>
          </div>
        </div>
        <hr />

        {/* products */}
        <div className="payment_flex">
          <h3>Review items and Delevery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item?.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className="payment_flex">
          <h3>Payment Methods</h3>
          <div className="payment_card_container">
            <div className="payment_details">
              <form action="">
                {/* error */}
                {cardError && (
                  <small style={{ color: "red" }}>{cardError}</small>
                )}

                {/* card element */}
                <CardElement onChange={handleChange} />

                {/* price */}
                <div className="payment_price">
                  <div>
                    <span style={{ display: "flex", gap: "10px" }}>
                      <p>Total Order | </p> <CurrencyFormat amount={total} />
                    </span>
                  </div>
                  <button>Pay Now</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment;
