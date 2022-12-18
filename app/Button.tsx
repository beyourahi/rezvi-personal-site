import { ButtonProps } from "types";

const Button: React.FC<ButtonProps> = ({ children }) => {
    return (
        <button className="px-8 py-4 text-base tracking-wider transition-all border rounded-md border-coolGreen text-coolGreen hover:bg-coolGreen/10">
            {children}
        </button>
    );
};

export default Button;
