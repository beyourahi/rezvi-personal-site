import { contactHeading, contactDesc } from "data.json";
import { ContactForm } from "./ContactForm";
import { Roboto_Mono } from "@next/font/google";
import { Section } from "@/app/utils";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const Contact = () => (
    <Section
        id="contact"
        classnames="items-center justify-center text-center 2xl:px-96"
    >
        <div className="flex flex-col items-center space-y-4">
            <h4 className={`${roboto_mono.className} text-lg text-coolGreen`}>
                What&apos;s Next?
            </h4>

            <h1 className={`text-[2.5rem] font-extrabold text-heading`}>
                {contactHeading}
            </h1>

            <p className="text-lg text-subHeading lg:w-[70%] xl:w-[60%]">
                {contactDesc}
            </p>
        </div>

        <ContactForm />
    </Section>
);
