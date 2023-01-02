import { HiArrowNarrowDown } from "react-icons/hi";

export const Arrow = () => (
    <div className="z-20 absolute bottom-[3%] left-[45%] lg:left-[43%] lg:bottom-[3%] xl:left-[45%] text-3xl md:text-4xl mb-12 bg-heading/60 hover:bg-heading/40 text-theme p-3 rounded-full animate-bounce transition-all ease-in">
        <a href="#about">
            <HiArrowNarrowDown className="text-primary" />
        </a>
    </div>
);
