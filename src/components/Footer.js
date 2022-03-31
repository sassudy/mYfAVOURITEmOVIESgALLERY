import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>Cassidy-Angel Kõiv - TARge20 - {year} </p>
    </footer>
  );
}

export default Footer;
