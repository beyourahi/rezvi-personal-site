import { brandName, tagline, description } from "data.json";
import { Button } from "./Button";
import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const Masthead = () => (
    <div className="container relative flex flex-col items-start justify-center h-screen mx-auto space-y-10 px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-72">
        <div className="space-y-6">
            <div>
                <h4
                    className={`${roboto_mono.className} mb-4 text-lg text-coolGreen`}
                >
                    Hi, my name is
                </h4>

                <h1 className="text-[2.5rem] font-extrabold text-heading mb-2 sm:text-5xl lg:text-7xl">
                    {brandName}.
                </h1>

                <h2 className="text-3xl font-extrabold text-subHeading sm:text-4xl lg:text-6xl xl:text-[4rem]">
                    {tagline}.
                </h2>
            </div>

            <p className="text-lg text-subHeading xl:w-[60%]">{description}</p>
        </div>

        <Button href="#contact">Get In Touch!</Button>
    </div>
);
