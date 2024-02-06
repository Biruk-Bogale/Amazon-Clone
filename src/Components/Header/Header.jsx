import React from "react";
import Amazon_logo from "../../assets/amazon_logo.png";
import Us_Flag from "../../assets/us-flag.jpeg";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import "./header.css";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";

function Header() {
  return (
    <section>
      <div className="header__container">
        <div className="header__logo">
          {/* logo */}

          <Link to="/">
            <img src={Amazon_logo} alt="Amazon Logo" />
          </Link>

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

          <Link to="/auth">
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          <Link to="/orders">
            <p>returns</p>
            <span>& Orders</span>
          </Link>

          <Link to="/cart" className="header__cart">
            <BiCart size={35} />
            <span>0</span>
          </Link>
        </div>
      </div>

      <LowerHeader />
    </section>
  );
}

export default Header;
