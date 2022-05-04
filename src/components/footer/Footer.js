import React from "react";
import "./Footer.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
    return (
        <div className="footer-div">
            <a
                href="https://github.com/edwardBenedict"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
            >
                <code className="brand">{"<ercan/> "}</code>
            </a>
            <img
                src={designSvg}
                alt="design"
                style={{ width: "40px", margin: "0  25px 0 10px" }}
            />

        </div>
    );
};

export default Footer;