import React from "react";
import "./style.css";

function Footer() {
  return (
        <footer className="footer mt-auto py-3">
        {/* <div className="container"> */}
        <ul className="d-flex list-inline justify-content-end">
          <li className="list-inline-item">
            <a className="footer-link" href="https://www.facebook.com/Y.A.MakerStore/" target="_blank" aria-label="FaceBook">
              <img src="/images/facebook.svg" className="nav-icons"></img>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="footer-link" href="https://www.instagram.com/y.a.maker/" target="_blank" aria-label="Instagram">
            <img src="/images/instagram.svg" className="nav-icons"></img>
            </a>
          </li>
          <li className="list-inline-item">
            <a className="footer-link" href="https://www.youtube.com/channel/UCgdXouwqLDLymwUVbmfuYFw" target="_blank" aria-label="YouTube">
            <img src="/images/youtube.svg" className="nav-icons"></img>
            </a>
            </li>
          </ul>
 {/* </div> */}
      </footer>
  );
}

export default Footer;