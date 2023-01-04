import { email } from "data.json";
import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const Email = () => (
    <div className="fixed bottom-0 right-[5%] hidden lg:flex flex-col items-center space-y-7 h-[35%] cursor-pointer">
        <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
            className={`${roboto_mono.className} text-base tracking-wider transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1 active:scale-95`}
        >
            {email}
        </a>

        <hr className="w-px border-none bg-subHeading grow" />
    </div>
);
