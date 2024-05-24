import React from "react";
import "./index.scss";
import { IoMdSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="container">
          <div className="icon">
            <IoMdSearch />

            <div className="serch">
              <input
                type="text"
                placeholder="Search"
                style={{ padding: "5px 1px" }}
              />
            </div>
          </div>
          <div className="buy" style={{}}>
            <button>SHOPPERS</button>
          </div>
          <div className="icon1">
            <div>
              <FaRegUser />
            </div>
            <div>
              <FaRegHeart />
            </div>
            <div>
              <MdOutlineShoppingCart />
            </div>
          </div>
        </div>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"} style={{marginRight:"20px"}}>HOME</NavLink>
                    <NavLink to={"/product"} style={{marginRight:"20px"}}>ABOUT</NavLink>
                    <NavLink to={"*"} style={{marginRight:"20px"}}>SHOP</NavLink>
                    <NavLink style={{marginRight:"20px"}}>CATALOGUE</NavLink>
                    <NavLink style={{marginRight:"20px"}}>NEW ARRIVALS</NavLink>
                    <NavLink to={"/add-product"} style={{marginRight:"20px"}}>ADD</NavLink>
                    
                </li>
            </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
