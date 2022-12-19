import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import { brandName } from "data.json";

export const About = () => (
    <div className="flex flex-col items-center space-y-10 bg-green-800 px-7">
        <h1 className="text-2xl font-extrabold text-heading">About Me </h1>

        <div className="space-y-4 text-base text-subHeading">
            <p>
                Hello! My name is Brittany and I enjoy creating things that live
                on the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
            </p>

            <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
            </p>

            <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
            </p>
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
