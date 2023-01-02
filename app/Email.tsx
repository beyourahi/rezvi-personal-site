import { email } from "data.json";

export const Email = () => (
    <div className="fixed bottom-0 right-[5%] hidden lg:flex flex-col items-center space-y-7 h-[35%]">
        <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noreferrer"
            style={{ writingMode: "vertical-lr", textOrientation: "sideways" }}
            className="text-base tracking-wider transition-all ease-in text-subHeading hover:text-coolGreen hover:-translate-y-1"
        >
            {email}
        </a>

        <hr className="w-px border-none bg-subHeading grow" />
    </div>
);
