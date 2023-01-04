import { contactHeading, contactDesc } from "data.json";
import { ContactForm } from "./ContactForm";
import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const Contact = () => (
    <div
        className="container flex flex-col items-center justify-center mx-auto space-y-10 text-center px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-96"
        id="contact"
    >
        <div className="flex flex-col items-center space-y-2">
            <h4 className={`${roboto_mono.className} text-lg text-coolGreen`}>
                What&apos;s Next?
            </h4>

            <h1 className="text-[2.5rem] font-extrabold text-heading">
                {contactHeading}
            </h1>

            <p className="text-lg text-subHeading lg:w-[70%] xl:w-[60%]">
                {contactDesc}
            </p>
        </div>

        <ContactForm />
    </div>
);
