import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layouts({ children }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "100vh" }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layouts;
