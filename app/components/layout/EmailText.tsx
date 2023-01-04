import { email } from "data.json";
import { Roboto_Mono } from "@next/font/google";
import { EmailTextProps } from "types";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const EmailText: React.FC<EmailTextProps> = ({ vertical }) => (
    <a
        href={`mailto:${email}`}
        target="_blank"
        rel="noreferrer"
        style={
            vertical
                ? {
                      writingMode: "vertical-lr",
                      textOrientation: "sideways",
                  }
                : {}
        }
        className={`${roboto_mono.className} text-base tracking-wider transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1 active:scale-95 hover:scale-110`}
    >
        {email}
    </a>
);
