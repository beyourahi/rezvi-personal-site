import { VLine } from "@/app/utils";
import { EmailText } from "./EmailText";

export const Email = () => (
    <>
        {/* //! Desktop version of Email */}
        <div className="fixed bottom-0 right-[5%] hidden lg:flex flex-col items-center space-y-7 h-[35%] cursor-pointer">
            <EmailText vertical />
            <VLine />
        </div>

        {/* ///! Mobile version of Email*/}
        <div className="flex justify-center space-x-16 text-subHeading lg:hidden">
            <EmailText />
        </div>
    </>
);
