import { Heading, Section } from "@/app/utils";
import { WorkTabs } from "./WorkTabs";
import { work_experience_heading } from "data.json";

export const WorkExperiences = () => (
    <Section>
        <Heading>{work_experience_heading}</Heading>
        <WorkTabs />
    </Section>
);
