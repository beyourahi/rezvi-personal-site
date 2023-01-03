import { ButtonProps } from "types";

export const Button: React.FC<ButtonProps> = ({ children, href, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="col-span-2 px-8 py-4 text-base font-bold tracking-wider text-center transition-all ease-in border rounded-lg cursor-pointer border-coolGreen text-coolGreen hover:bg-coolGreen/10"
    >
        {children}
    </a>
);
