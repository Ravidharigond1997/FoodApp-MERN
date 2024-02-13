import React from "react";
import "../Css/Home.css";

const contentData = [
  {
    name: "Sports",
    image: "https://laravel.pixelstrap.net/fastkart/storage/378/sports.png",
    color: "#fcf1ff",
  },
  {
    name: "electronics",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/393/Electronics.png",
    color: "#fff9d8",
  },
  {
    name: "Accessories",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/380/acc_category.png",
    color: "#fff9d8",
  },
  {
    name: "Fashions",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/382/fashion_category.png",
    color: "#fff2ec",
  },
  {
    name: "Buety",
    image: "https://laravel.pixelstrap.net/fastkart/storage/392/Beauty.png",
    color: "#fce9e9",
  },
  {
    name: "Grocery & Staples",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/394/Grocery-&-straples.png",
    color: "#fcf1ff",
  },
  {
    name: "Accessories",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/380/acc_category.png",
    color: "#fff9d8",
  },
  {
    name: "Buety",
    image: "https://laravel.pixelstrap.net/fastkart/storage/392/Beauty.png",
    color: "#fce9e9",
  },
  {
    name: "Fashions",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/382/fashion_category.png",
    color: "#fff2ec",
  },
  {
    name: "Sports",
    image: "https://laravel.pixelstrap.net/fastkart/storage/378/sports.png",
    color: "#fff9d8",
  },
  {
    name: "Grocery & Staples",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/394/Grocery-&-straples.png",
    color: "#fcf1ff",
  },
  {
    name: "electronics",
    image:
      "https://laravel.pixelstrap.net/fastkart/storage/393/Electronics.png",
    color: "#fff9d8",
  },
];
export default function CategoryList() {
  return (
    <div className="category-list">
      <h2>Shop By Categories</h2>
      <div className="d-flex gap-5 flex-wrap justify-content-center align-items-center">
        {contentData.map((data) => (
          <div className="py-3 text-center mt-2">
            <div className="rounded-3" style={{ backgroundColor: data.color }}>
              <img
                width="150px"
                height="80px"
                src={data.image}
                alt={data.name}
              />
              <p>{data.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
