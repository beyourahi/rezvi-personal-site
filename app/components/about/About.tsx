import Image from "next/image";
import headshot from "@/public/images/headshot.jpeg";
import { Heading, Section } from "@/app/utils";
import { brandName, about_me } from "data.json";

export const About = () => (
    <Section id="about">
        <Heading>About Me</Heading>

        <div className="flex flex-col items-center space-y-10 lg:flex-row lg:justify-between lg:space-y-0">
            <div className="space-y-4 text-base text-subHeading lg:text-lg lg:w-[55%]">
                {about_me.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>

            <Image
                src={headshot}
                alt={`Portrait Picture Of ${brandName}`}
                className="object-contain w-[80%] aspect-square sm:w-[60%] lg:w-[45%] lg:self-start"
            />
        </div>
    </Section>
);
