import { ServiceCard } from "./ServiceCard";
import { services } from "data.json";

export const Services = () => (
    <div className="flex flex-col space-y-10 px-7">
        <h1 className="text-[1.7rem] font-extrabold text-center text-heading">
            Services
        </h1>

        {services.map((service, index) => (
            <ServiceCard service={service} key={index} />
        ))}
    </div>
);
