import {
    FaGlobe,
    FaBlog,
    FaNewspaper,
    FaInternetExplorer,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineArticle } from "react-icons/md";
import { RxMagnifyingGlass } from "react-icons/rx";
import { BsGearFill } from "react-icons/bs";
import { BiGhost } from "react-icons/bi";
import { ServiceCardIconInterface } from "types";

export const ServiceCardIcon: React.FC<ServiceCardIconInterface> = ({
    icon,
}) => (
    <div className="text-3xl text-coolGreen">
        {icon === "FaGlobe" ? (
            <FaGlobe />
        ) : icon === "FaBlog" ? (
            <FaBlog />
        ) : icon === "FaNewspaper" ? (
            <FaNewspaper />
        ) : icon === "FaInternetExplorer" ? (
            <FaInternetExplorer />
        ) : icon === "HiOutlineMail" ? (
            <HiOutlineMail />
        ) : icon === "MdOutlineArticle" ? (
            <MdOutlineArticle />
        ) : icon === "RxMagnifyingGlass" ? (
            <RxMagnifyingGlass />
        ) : icon === "BsGearFill" ? (
            <BsGearFill />
        ) : (
            <BiGhost />
        )}
    </div>
);
