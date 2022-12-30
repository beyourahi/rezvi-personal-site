import { ServiceCardInterface } from "types";

export const ServiceCard: React.FC<ServiceCardInterface> = ({
    service: { service_name, service_desc },
}) => (
    <div className="space-y-4 bg-teal-600 shadow-xl p-7 rounded-xl bg-white/5">
        <h1 className="text-xl font-bold text-coolGreen">{service_name}</h1>

        <p className="text-base text-subHeading">{service_desc}</p>
    </div>
);
