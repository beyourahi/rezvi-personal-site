import { contactHeading, contactDesc } from "data.json";
import { ContactButton } from "./ContactButton";
import { email } from "data.json";

export const Contact = () => (
    <div
        className="flex flex-col items-center justify-center mb-40 space-y-10 text-center px-7"
        id="contact"
    >
        <div className="space-y-2">
            <h4 className="text-lg text-coolGreen">What&apos;s Next?</h4>

            <h1 className="text-[2.5rem] font-extrabold text-heading">
                {contactHeading}
            </h1>

            <p className="text-lg text-subHeading">{contactDesc}</p>
        </div>

        <ContactButton href={`mailto:${email}`}>Say Hello!</ContactButton>
    </div>
);
