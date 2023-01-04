"use client";

import { useState } from "react";
import { services_1, services_2, services_heading } from "data.json";
import { ServiceCard } from "./ServiceCard";
import { Button, Heading, Section } from "@/app/utils";

export const Services = () => {
    const [showMore, setShowMore] = useState(false);

    const handleShowMore = () => setShowMore((prev) => !prev);

    return (
        <Section classnames="items-center">
            <Heading>{services_heading}</Heading>

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
        </Section>
    );
};
