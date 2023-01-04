import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { facebookURL, instagramURL, linkedinURL } from "data.json";

export const SocialIcons = () => (
    <>
        <a href={facebookURL} target="_blank" rel="noreferrer">
            <FaFacebook
                className="transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1 active:scale-95 hover:scale-110"
                size={25}
            />
        </a>

        <a href={instagramURL} target="_blank" rel="noreferrer">
            <BsInstagram
                className="transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1 active:scale-95 hover:scale-110"
                size={25}
            />
        </a>

        <a href={linkedinURL} target="_blank" rel="noreferrer">
            <FiLinkedin
                className="transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1 active:scale-95 hover:scale-110"
                size={25}
            />
        </a>
    </>
);
