import React from "react";
import Encabezado from "../Components/Encabezado";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div className="conteiner-fluid">
      <div className="section">
        {" "}
        <Encabezado />
      </div>
      <div className="section">{children}</div>
      <div className="section">
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
