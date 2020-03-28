import React from "react";

import "./styles.css";

export default function Footer() {
  return (
    <div className="footer">
      <small className="text-footer">By</small>
      <a
        href="https://www.instagram.com/jrmarques.dev/?hl=pt-br"
        className="name"
        target="_blank"
        rel="noopener noreferrer"
      >
        Junior Marques
      </a>
    </div>
  );
}
