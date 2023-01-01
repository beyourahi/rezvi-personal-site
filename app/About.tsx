import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import { brandName, aboutme1, aboutme2, aboutme3 } from "data.json";

export const About = () => (
    <div className="container flex flex-col items-center mx-auto space-y-10 px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-72">
        <div className="flex items-center justify-between w-full space-x-10">
            <h1 className="text-[1.7rem] font-extrabold text-heading lg:text-3xl">
                About Me
            </h1>
            <hr className="bg-white/25 border-none h-[1px] grow" />
        </div>

        <div className="flex flex-col items-center space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
            <div className="space-y-4 text-base text-subHeading lg:text-lg lg:w-[55%]">
                <p>{aboutme1}</p>
                <p>{aboutme2}</p>
                <p>{aboutme3}</p>
            </div>

            <Image
                src={headshot}
                alt={`Portrait Picture Of ${brandName}`}
                className="object-contain w-[80%] aspect-square sm:w-[60%] lg:w-[45%] lg:self-start"
            />
        </div>
    </div>
);
