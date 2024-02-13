import React from "react";
import "../Css/Home.css";

import Layouts from "../Components/Layouts";
import BestValuableDeals from "./BestValuableDeals";
import CategoryList from "./CategoryList";
import TopProduct from "./TopProduct";
import ProductList from "./ProductList";
import NewProduct from "./NewProduct";

function Home() {
  return (
    <Layouts>
      <div className="home-section1">
        <div className="content">
          <img
            src="https://laravel.pixelstrap.net/fastkart/storage/672/rome_09.jpg"
            width="95%"
            alt="img1"
            height="90%"
            className="img1"
          />
        </div>
        <div className="content2">
          <img
            src="git branch -M main"
            width="90%"
            alt="img2"
            className="img2"
          />
        </div>
        <div className="content3">
          <img
            src="https://laravel.pixelstrap.net/fastkart/storage/667/rome_05.jpg"
            width="100%"
            alt="image3"
            className="img3"
          />
          <img
            src="https://laravel.pixelstrap.net/fastkart/storage/669/rome_06.jpg"
            width="100%"
            alt="image3"
            className="img4"
          />
        </div>
      </div>
      <CategoryList />
      <BestValuableDeals />
      <TopProduct />
      <ProductList />
      <NewProduct />
    </Layouts>
  );
}

export default Home;
