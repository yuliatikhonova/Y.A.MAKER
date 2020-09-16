import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer mt-auto py-3">
      <ul className="d-flex list-inline justify-content-center">
        <li className="list-inline-item">
          <a className="footer-link" rel="noopener noreferrer" href="https://www.facebook.com/Y.A.MakerStore/" target="_blank" aria-label="FaceBook">
            <img src="/images/facebook.svg" alt="facebook" className="nav-icons"></img>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="footer-link" rel="noopener noreferrer" href="https://www.instagram.com/y.a.maker/" target="_blank" aria-label="Instagram">
            <img src="/images/instagram.svg" alt="instagram" className="nav-icons"></img>
          </a>
        </li>
        <li className="list-inline-item">
          <a className="footer-link" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCgdXouwqLDLymwUVbmfuYFw" target="_blank" aria-label="YouTube">
            <img src="/images/youtube.svg" alt="youtube" className="nav-icons"></img>
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;