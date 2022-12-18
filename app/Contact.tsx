import { contactHeading, contactDesc } from "data.json";
import Button from "./Button";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-10 text-center px-7">
            <div className="space-y-2">
                <h4 className="text-lg text-coolGreen">What&apos;s Next?</h4>

                <h1 className="text-[2.5rem] font-extrabold text-heading">
                    {contactHeading}
                </h1>

                <p className="text-lg text-subHeading">{contactDesc}</p>
            </div>

            <Button>Say Hello</Button>
        </div>
    );
};

export default Contact;
