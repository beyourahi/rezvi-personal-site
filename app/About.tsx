import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import { brandName, aboutme1, aboutme2, aboutme3 } from "data.json";

export const About = () => (
    <div className="flex flex-col items-center space-y-10 px-7">
        <h1 className="text-[1.7rem] font-extrabold text-heading">About Me </h1>

        <div className="space-y-4 text-base text-subHeading">
            <p>{aboutme1}</p>
            <p>{aboutme2}</p>
            <p>{aboutme3}</p>
        </div>

        <div className="flex justify-center bg-red-60">
            <Image
                src={headshot}
                alt={`Portrait Picture Of ${brandName}`}
                className="object-contain w-[80%] aspect-square"
            />
        </div>
    </div>
);
