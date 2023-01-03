"use client";

import { ServiceCard } from "./ServiceCard";
import { services_1, services_2 } from "data.json";
import { Button } from "./Button";
import { useState } from "react";

export const Services = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => setShowMore((prev) => !prev);

    return (
        <div className="container flex flex-col items-center mx-auto space-y-10 px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-72">
            <div className="flex items-center justify-between w-full space-x-10">
                <h1 className="text-[1.7rem] font-extrabold text-heading lg:text-4xl">
                    Services
                </h1>
                <hr className="bg-white/25 border-none h-[1px] grow" />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                {services_1.map((service, index) => (
                    <ServiceCard service={service} key={index} />
                ))}

                {showMore &&
                    services_2.map((service, index) => (
                        <ServiceCard service={service} key={index} />
                    ))}
            </div>

            <Button onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
            </Button>
        </div>
    );
};
