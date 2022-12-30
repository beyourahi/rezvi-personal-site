import { brandName, facebookURL, instagramURL, linkedinURL } from "data.json";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const year = new Date().getFullYear();

export const Footer = () => (
    <div className="flex flex-col items-center pb-10 space-y-8">
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
            {/* <div className="text-base text-subHeading">
                Designed & Built by{" "}
                <a
                    href="https://github.com/beyourahi"
                    target="_blank"
                    rel="noreferrer"
                    className="transition-all hover:underline hover:underline-offset-8 hover:decoration-subHeading"
                >
                    Rahi Khan
                </a>
            </div> */}

            <div className="text-base text-subHeading">
                Copyright &copy; {year} {brandName}{" "}
            </div>
        </div>
    </div>
);
