import { ButtonProps } from "types";
import { email } from "data.json";

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <a
            href={`mailto:${email}`}
            className="px-8 py-4 text-base tracking-wider transition-all border rounded-md border-coolGreen text-coolGreen hover:bg-coolGreen/10"
        >
            {children}
        </a>
    );
};

export default Button;
