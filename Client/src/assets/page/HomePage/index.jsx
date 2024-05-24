import React, { useEffect, useState } from "react";
import "./index.scss";
import { FaCarSide } from "react-icons/fa6";
import { IoReload } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";


import { HiOutlineUserCircle } from "react-icons/hi2";
import axios from "axios";
import { Card } from "antd";
import { BASE_URL } from "../../services";
import Footer from "./../../layout/Footer/index";
const { Meta } = Card;
const HomePage = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios.get(BASE_URL).then((res) => {
      setProduct(res.data.data);
    });
  }, []);
  return (
    <div>
      <div className="home-page">
        <div className="image">
          <div className="title">
            <h1>Finding Your Perfect Shoes</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              maiores vitae eum beatae sequi atque, voluptate quasi harum
              impedit suscipit inventore corporis tempora iure delectus animi
              eos molestias nesciunt optio?
            </p>
            <button>SHOP NOW</button>
          </div>
          <div className="all">
            <div className="icon">
              <div style={{ fontSize: "2rem" }}>
                <FaCarSide />
              </div>
              <div className="look">
                <h1>FREE SHIPPING</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div className="icon1">
              <div style={{ fontSize: "2rem" }}>
                <IoReload />
              </div>
              <div className="look1">
                <h1>FREE RETURNS</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
            <div className="icon2">
              <div style={{ fontSize: "2rem" }}>
                <HiOutlineUserCircle />
              </div>
              <div className="look2">
                <h1>CUSTOMER SUPPORT</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus at iaculis quam. Integer accumsan tincidunt
                  fringilla.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="img">
            <div>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/women.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/children.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/men.jpg"
                alt=""
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "5rem",
            }}
          >
            <h1>Featured Products</h1>
          </div>
          <div className="card-container">
            {product.map((item, index) => {
              return (
                <div className="cardd">
                  <Card
                    hoverable
                    style={{
                      width: 400,
                    }}
                    cover={<img alt="example" src={`${item.imageUrl}`} />}
                  >
                    <Meta
                      title={`${item.title}`}
                      description={`$ ${item.price}`}
                    />
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="clon-item">
            <h1>Big Sale</h1>
          </div>
          <div className="clon">
            <img
              src="https://preview.colorlib.com/theme/shoppers/images/blog_1.jpg"
              alt=""
            />
            <h1>50% less in all items</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
              iste dolor accusantium facere corporis ipsum animi deleniti
              fugiat. Ex, veniam?
            </p>
            <button>SHOP NOW</button>
          </div>

          <hr />

          <div className="footer">
            <div className="footer-one">
              <h1>Navigations</h1>
              <p>Sell online</p>
              <p>Features</p>
              <p>Shopping cart</p>
              <p>Store builder</p>
              <p>Mobile commerce</p>
              <p>Dropshipping</p>
            </div>

            <div className="footer-too">
              <h1>Promo</h1>
              <img
                src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg"
                alt=""
                style={{ height: "100px" }}
              />
              <p>Promo from nuary 15 — 25, 2019</p>
            </div>
            <div className="footer-thrie">
              <h1>Contact Info</h1>
              <div className="icon-one" style={{ display: "flex" }}>
                <LuMapPin />
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
                </p>
              </div>
              <div className="icon-too"style={{ display: "flex" }}>
              <FiPhone />
                <p>
                +2 392 3929 210
                </p>
              </div>
              <div className="icon-thrie"style={{ display: "flex" }}>
              <IoMailOutline />
                <p>
                emailaddress@domain.com
                </p>
              </div>
              <div className="serch">
                <h1>Subscribe</h1>
                <input type="text"  placeholder="Email"/>
                <button style={{backgroundColor:"#7971EA",}}>SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
