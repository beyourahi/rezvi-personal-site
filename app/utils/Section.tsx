import { SectionInterface } from "types";

export const Section: React.FC<SectionInterface> = ({
    children,
    id,
    classnames,
}) => (
    <div
        id={id}
        className={`container flex flex-col mx-auto space-y-10 px-7 sm:px-14 md:px-20 lg:px-28 xl:px-44 2xl:px-72 ${classnames}`}
    >
        {children}
    </div>
);
