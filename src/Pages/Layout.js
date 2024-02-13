import React from "react";
import HeaderSection from "../Components/Header/Header";
import FooterSection from "../Components/Footer/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <HeaderSection />
      {children}
      <FooterSection />
    </div>
  );
}
