import React from "react";
import Encabezado from "../Components/Encabezado";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div className="conteiner-fluid">
      <div>
        <Encabezado />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
