import React from "react";
import "./Notifications.scss";

import markImg from "./assets/images/avatar-mark-webber.webp";
import angelaImg from "./assets/images/avatar-angela-gray.webp";
import jacobImg from "./assets/images/avatar-jacob-thompson.webp";
import rizkyImg from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyImg from "./assets/images/avatar-kimberly-smith.webp";
import chessImg from "./assets/images/image-chess.webp";
import nathanImg from "./assets/images/avatar-nathan-peterson.webp";
import annaImg from "./assets/images/avatar-anna-kim.webp";

const Notifications = () => {
  return (
    <div className="notifications">
      <div className="notifications__title--container">
        <h1 className="notifications__title">
          Notifications{" "}
          <span className="notifications__title--notification-count">3</span>
        </h1>
        <p className="notifications__mark-as-read">Mark all as read</p>
      </div>
      <div className="notifications__container">
        <div className="notifications__container--card new">
          <img
            src={markImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Mark Webber
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                reacted to your recent post
              </h2>
              <h2 className="notifications__container--card-post">
                My first tournament today!
              </h2>
              <div className="notifications__container--card-new-notification"></div>
            </div>
            <h3 className="notifications__container--card-notification--age">
              1m ago
            </h3>
          </div>
        </div>
        <div className="notifications__container--card new">
          <img
            src={angelaImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Angela Gray
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                followed you
              </h2>
              <div className="notifications__container--card-new-notification"></div>
            </div>
            <h3 className="notifications__container--card-notification--age">
              5m ago
            </h3>
          </div>
        </div>
        <div className="notifications__container--card new">
          <img
            src={jacobImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Jacob Thompson
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                has joined your group
              </h2>
              <h2 className="notifications__container--card-group">
                Chess Club
              </h2>
              <div className="notifications__container--card-new-notification"></div>
            </div>
            <h3 className="notifications__container--card-notification--age">
              1 day ago
            </h3>
          </div>
        </div>
        <div className="notifications__container--card">
          <img
            src={rizkyImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Rizky Hasanuddin
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                sent you a private message
              </h2>
            </div>
            <h3 className="notifications__container--card-notification--age">
              5 days ago
            </h3>
            <div className="notifications__container--card-message-container">
              <p className="notifications__container--card-message">
                Hello, thanks for setting up the Chess Club. I've been a member
                for a few weeks now and I'm already having lots of fun and
                improving my game.
              </p>
            </div>
          </div>
        </div>
        <div className="notifications__container--card">
          <img
            src={kimberlyImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Kimberly Smith
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                commented on your picture
              </h2>
            </div>
            <h3 className="notifications__container--card-notification--age">
              5m ago
            </h3>
          </div>
          <div className="notifications__container--card-image-container">
            <img src={chessImg} alt="Chess" />
          </div>
        </div>
        <div className="notifications__container--card">
          <img
            src={nathanImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Nathan Peterson
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                reacted to your recent post
              </h2>
              <h2 className="notifications__container--card-post">
                5 end-game strategies to increase your win rate
              </h2>
            </div>
            <h3 className="notifications__container--card-notification--age">
              2 weeks ago
            </h3>
          </div>
        </div>
        <div className="notifications__container--card">
          <img
            src={annaImg}
            alt="User Profile"
            className="notifications__container--card-img"
          />
          <div className="notifications__container--card-notification-container">
            <div className="notifications__container--card-notification">
              {" "}
              <h2 className="notifications__container--card-name">
                Anna Kim
              </h2>{" "}
              <h2 className="notifications__container--card-action">
                left the group
              </h2>
              <h2 className="notifications__container--card-group">
                Chess Club
              </h2>
            </div>
            <h3 className="notifications__container--card-notification--age">
              2 weeks ago
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
