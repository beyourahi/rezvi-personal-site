"use client";

import { Tab } from "@headlessui/react";
import { works } from "data.json";

export const WorkTabs = () => {
    return (
        <div>
            <Tab.Group>
                <Tab.List className="flex overflow-x-auto">
                    {works.map((work, index) => (
                        <Tab key={index}>
                            {({ selected }) => (
                                <div
                                    className={`h-full flex items-center justify-center px-10 py-1 transition-all group hover:bg-white/10 border-b-4 ${
                                        selected
                                            ? "bg-white/10 decoration-coolGreen border-coolGreen"
                                            : "border-white/10"
                                    }`}
                                >
                                    <p
                                        className={`text-base group-hover:text-coolGreen ${
                                            selected
                                                ? "text-coolGreen"
                                                : "text-subHeading"
                                        }`}
                                    >
                                        {work.company_name}
                                    </p>
                                </div>
                            )}
                        </Tab>
                    ))}
                </Tab.List>

                <Tab.Panels>
                    {works.map((work, index) => (
                        <Tab.Panel key={index} className="py-10 space-y-4 px-7">
                            <p className="text-[1.3rem] font-bold">
                                <span className="text-heading">
                                    {work.job_title}
                                </span>

                                <span className="text-coolGreen">
                                    {" "}
                                    @{" "}
                                    <a
                                        href={work.company_link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {work.company_name}
                                    </a>
                                </span>
                            </p>

                            <p className="text-base text-subHeading">
                                {work.tenure}
                            </p>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};
