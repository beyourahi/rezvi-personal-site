import { brandName } from "data.json";
import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const year = new Date().getFullYear();

export const Copyright = () => (
    <div
        className={`${roboto_mono.className} text-base text-subHeading text-center`}
    >
        Copyright &copy; {year} {brandName}{" "}
    </div>
);
