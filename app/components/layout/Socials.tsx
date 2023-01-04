import { VLine } from "@/app/utils";
import { SocialIcons } from "./SocialIcons";

export const Socials = () => (
    <>
        {/* //! Desktop version of socials component */}
        <div className="fixed bottom-0 left-[5%] hidden lg:flex flex-col items-center space-y-7 h-[30%]">
            <SocialIcons />
            <VLine />
        </div>

        {/* ///! Mobile version of socials component */}
        <div className="flex space-x-16 text-subHeading lg:hidden">
            <SocialIcons />
        </div>
    </>
);
