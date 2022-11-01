import React from "react";
import github from "../../assets/images/GitHub-icon.png";
import linkedin from "../../assets/images/linkedin-icon.png";
import email from "../../assets/images/email-icon.png";

function Footer() {
    return (
        <footer>
            <a href="https://github.com/EricksonVIK" target="_blank"><img className="footer-icon" src={`${github}`} alt="github icon"></img></a>
            <a href="https://www.linkedin.com/in/cserickson/" target="_blank"><img className="footer-icon" src={`${linkedin}`} alt="linkedin icon"></img></a>
            <a href="mailto://ericksonvik76@gmail.com"><img className="footer-icon" src={`${email}`} alt="email icon"></img></a>
        </footer>
    )
}

export default Footer;