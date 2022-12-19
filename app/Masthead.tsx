import { brandName, tagline, description } from "data.json";
import { ContactButton } from "./ContactButton";

export const Masthead = () => (
    <div className="flex flex-col items-start justify-center space-y-10 bg-red-800 px-7">
        <div className="space-y-6">
            <div className="space-y-2">
                <h4 className="text-lg text-coolGreen">Hi, my name is</h4>

                <h1 className="text-[2.5rem] font-extrabold text-heading">
                    {brandName}.
                </h1>

                <h2 className="text-3xl font-extrabold text-subHeading">
                    {tagline}.
                </h2>
            </div>

            <p className="text-lg text-subHeading">{description}</p>
        </div>

        <ContactButton href="#contact">Get In Touch!</ContactButton>
    </div>
);
