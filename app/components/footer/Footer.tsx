import { Section } from "@/app/utils";
import { Email } from "../layout/Email";
import { Socials } from "../layout/Socials";
import { Copyright } from "./Copyright";

export const Footer = () => (
    <Section classnames="items-center pb-10">
        <Socials />

        <Email />

        <Copyright />
    </Section>
);
