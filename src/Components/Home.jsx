import React from "react";
import { useState } from "react";
import "./Home.css";
import DigitInput from "./DigitInput";
import DisplayCard from "./DisplayCard";
export default function Home() {
  const [cardData, setCardData] = useState([]);
  const [cardDetails, setCardDetails] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const callBackFunction = (id) => {
    setCardData(() => {
      return cardData.filter((el, ind) => {
        return ind !== id;
      });
    });
  };
  const handlePay = () => {
    setCardData([...cardData, cardDetails]);
  };
  return (
    <div className="main_contianer">
      <div className="left_section">
        <div className="company_name">
          <div className="span_wallet">
            <i className="bi bi-wallet-fill"></i>
          </div>
          <div className="pay_name">Dhwani IRS</div>
        </div>
        <div className="card_number">
          <div className="text_card_number">
            <span className="span1">Card Number</span>
            <span className="span2">
              Enter the 16-digit card number of the card
            </span>
          </div>
          <div className="edit_logo">
            <i class="bi bi-pencil-fill"></i>
            <span>Edit</span>
          </div>
        </div>
        <div className="card_digit">
          <DigitInput
            setCardDetails={setCardDetails}
            cardDetails={cardDetails}
          />
        </div>
        <div className="cvv_number">
          <div className="text_card_number">
            <span className="span1">CVV Number</span>
            <span className="span2">
              Enter the 16-digit card number of the card
            </span>
          </div>
          <div className="cvv_input">
            <input maxLength="3" placeholder="3 digit" />
          </div>
        </div>
        <div className="expairay_date">
          <div className="text_card_number">
            <span className="span1">Expiry Date</span>
            <span className="span2">
              Enter the 16-digit card number of the card
            </span>
          </div>
          <div className="cvv_input change_input_size">
            <input maxLength="2" placeholder="2 digit" />
            <span className="divider">/</span>
            <input maxLength="2" placeholder="2 digit" />
          </div>
        </div>
        <div className="button">
          <button className="pay_button" onClick={handlePay}>
            Pay Now
          </button>
        </div>
      </div>
      <div className="right_section">
        <h1>Card Details</h1>
        <div className="right_box">
          <ol>
            {cardData.map((el, ind) => {
              return (
                <div key={ind}>
                  <li>
                    <DisplayCard
                      cardData={el}
                      ind={ind}
                      callBackFunction={callBackFunction}
                    />
                  </li>
                </div>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
