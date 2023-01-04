import { HeadingInterface } from "types";
import { HLine } from "./HLine";

export const Heading: React.FC<HeadingInterface> = ({ children }) => (
    <div className="flex items-center justify-between w-full space-x-10">
        <h1 className="text-[1.7rem] font-extrabold text-heading lg:text-3xl">
            {children}
        </h1>
        <HLine />
    </div>
);
