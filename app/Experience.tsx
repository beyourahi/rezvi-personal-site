import { WorkTabs } from "./WorkTabs";

export const Experience = () => (
    <div className="container flex flex-col mx-auto space-y-12 px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-72">
        <div className="flex items-center justify-between w-full space-x-10">
            <h1 className="text-[1.7rem] font-extrabold text-heading lg:text-4xl">
                Where I&apos;ve Worked
            </h1>
            <hr className="bg-white/25 border-none h-[1px] grow" />
        </div>

        <WorkTabs />
    </div>
);
