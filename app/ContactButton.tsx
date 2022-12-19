import { ButtonProps } from "types";

export const ContactButton: React.FC<ButtonProps> = ({ children, href }) => (
    <a
        href={href}
        className="px-8 py-4 text-base tracking-wider transition-all border rounded-md border-coolGreen text-coolGreen hover:bg-coolGreen/10"
    >
        {children}
    </a>
);
