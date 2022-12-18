import { brandName, facebookURL, instagramURL, linkedinURL } from "data.json";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <div className="flex flex-col items-center mb-8 space-y-10">
            <div className="flex space-x-16 text-2xl text-subHeading">
                <a href={facebookURL} target="_blank" rel="noreferrer">
                    <FaFacebookSquare />
                </a>
                <a href={instagramURL} target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
                <a href={linkedinURL} target="_blank" rel="noreferrer">
                    <FaLinkedinIn />
                </a>
            </div>

            <div className="space-y-3 text-center">
                <div className="text-base text-subHeading">
                    Designed & Built by Rahi Khan
                </div>

                <div className="text-base text-subHeading">
                    Copyright &copy; {year} {brandName}{" "}
                </div>
            </div>
        </div>
    );
};

export default Footer;
