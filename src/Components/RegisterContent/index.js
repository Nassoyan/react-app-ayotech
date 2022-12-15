import React from "react";
import "./style.css";
import Star from "../../Icons/contentIcons/stars";
import WhiteStar from "../../Icons/contentIcons/WhiteStars";
import FeedPerson from "../../Icons/contentIcons/feedbackPerson";
import FeedEmail from "../../Icons/contentIcons/feedE-mail";

function RegisterField() {
  const feedbackStarArray = [
    <WhiteStar />,
    <WhiteStar />,
    <WhiteStar />,
    <WhiteStar />,
    <WhiteStar />,
  ];
  return (
    <div className="register-wrapper">
      <div className="reg-title">Оставить отзыв</div>
      <div className="reg-nav">
        <div className="feed-star-div">
          <span>Кухня</span>
          {feedbackStarArray.map(function (el, index) {
            return <span key={index}>{el}</span>;
          })}
        </div>
        <div className="feed-star-div">
          <span>Обслуживание</span>
          {feedbackStarArray.map(function (el, index) {
            return <span key={index}>{el}</span>;
          })}
        </div>
        <div className="feed-star-div">
          <span>Цена/качество</span>
          {feedbackStarArray.map(function (el, index) {
            return <span key={index}>{el}</span>;
          })}
        </div>
      </div>
      <div className="input-div">
        <div className="btn-input-container">
          <div className="feed-div">
            <FeedPerson />
          </div>
          <input placeholder="Name" type="text"></input>
        </div>
        <div className="btn-input-container">
          <div className="feed-div">
            <FeedEmail />
          </div>
          <input placeholder="E-mail" type="text"></input>
        </div>
      </div>
      <div className="big-input">
        <textarea rows="13" placeholder="Your massage"></textarea>
      </div>
      <div className="div-btn">
        <button className="reg-btn">send</button>
      </div>
    </div>
  );
}

export default RegisterField;
