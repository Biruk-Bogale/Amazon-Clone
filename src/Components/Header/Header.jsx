import React from "react";
import Amazon_logo from "../../assets/amazon_logo.png";
import Us_Flag from "../../assets/us-flag.jpeg";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import "./header.css";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <section>
      <div className="header__container">
        <div className="header__logo">
          {/* logo */}

          <a href="/">
            <img src={Amazon_logo} alt="Amazon Logo" />
          </a>

          {/* delivery */}

          <div className="header__delivery">
            <span>
              <CiLocationOn />
            </span>

            <div>
              <p>Delivered to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="header__search">
          {/* search */}

          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Amazon" />
          <FaSearch />
        </div>

        <div className="header__order">
          <a href="" className="header_language">
            <img src={Us_Flag} alt="" />
            <select name="" id="">
              <option value="">EN</option>
            </select>
          </a>

          <a href="">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </a>

          <a href="">
            <p>returns</p>
            <span>& Orders</span>
          </a>

          <a href="" className="header__cart">
            <BiCart size={35} />
            <span>0</span>
          </a>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header;
