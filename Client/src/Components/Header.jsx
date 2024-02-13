import React, { useState } from "react";
import "../Css/header.css";
import { IoSearchSharp, IoNotifications } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { SiFireship } from "react-icons/si";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineLogin } from "react-icons/ai";
import { BiCategory } from "react-icons/bi";
import { Toast } from "@chakra-ui/react";
import axios from "axios";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Header() {
  const [show, setShow] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const showLogin = () => setShowSignup(true);

  const showRegister = () => setShowSignup(false);

  const loginUser = async () => {};

  const createUser = async () => {
    setLoading(true);
    if (!value.name === "" || !value.email === "" || !value.password === "") {
      Toast({
        title: "Please fill all fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    try {
      const { data } = await axios.post("/api/v1/register", {
        value,
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setShow(false);
    } catch (error) {
      Toast({
        status: "dager",
        description: error.response.data.message,
        position: "top",
        duration: 9000,
        isClosable: true,
      });
      setLoading(false);
    }
  };

  const handleChange = (event) => {
    setValue({ ...value, [event.target.name]: event.target.value });
  };

  const handleChangeLogin = (event) => {
    setLoginValue({ ...value, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="navSection">
        <div className="logo">
          <h2>
            Fast<span>Kart.</span>
          </h2>
        </div>
        <div className="navItems">
          <input
            type="search"
            placeholder="search for product, delivered to your door..."
          />
          <IoSearchSharp className="searchIcon" />
        </div>
        <div className="icons">
          <IoNotifications className="icons-item" />
          <FaRegHeart className="icons-item" />
          <FaShoppingCart className="icons-item" />
          <AiOutlineLogin className="icons-item" onClick={handleShow} />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Modal.Title
              className=""
              style={{ marginLeft: "88px", cursor: "pointer" }}
              onClick={showRegister}
              isLoading={loading}
            >
              <a
                href="#signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                Signup
              </a>
            </Modal.Title>
            <Modal.Title
              className=""
              style={{ marginLeft: "129px", cursor: "pointer" }}
              onClick={showLogin}
            >
              Login
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {showSignup ? (
              <form
                style={{
                  display: "flex",
                  width: "400px",
                  margin: "auto",
                  gap: "20px",
                  flexDirection: "column",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  onChange={(e) => handleChangeLogin(e)}
                  required
                />
                <input
                  type="password"
                  placeholder="Enter your password"
                  onChange={(e) => handleChangeLogin(e)}
                  required
                />
              </form>
            ) : (
              <form id="signup">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "400px",
                    margin: "auto",
                    gap: "20px",
                  }}
                >
                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Enter your phone"
                    name="phone"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    onChange={(e) => handleChange(e)}
                    required
                  />
                </div>
              </form>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            {showSignup ? (
              <Button variant="primary" onClick={loginUser} isLoading={loading}>
                Login
              </Button>
            ) : (
              <Button
                variant="primary"
                onClick={createUser}
                isLoading={loading}
              >
                Signup
              </Button>
            )}
          </Modal.Footer>
        </Modal>
      </div>
      <div className="secondNav">
        <div className="section1">
          <ul>
            <li>
              <BiCategory className="category-icon" /> Categories
            </li>
            <li>
              Home <IoIosArrowDown />
            </li>
            <li>
              Collections <IoIosArrowDown />
            </li>
            <li>
              Product <IoIosArrowDown />
            </li>
            <li>
              Mage Menu <IoIosArrowDown />
            </li>
            <li>
              Blog <IoIosArrowDown />
            </li>
            <li>
              Pages <IoIosArrowDown />
            </li>
            <li>
              Seller <IoIosArrowDown />
            </li>
          </ul>
        </div>
        <div className="section2">
          <button>
            <SiFireship id="fire-icon" />
            Hot Deals
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
