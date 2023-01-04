export interface Children {
    children: React.ReactNode;
}

export interface HeadingInterface extends Children {}

export interface SectionInterface extends Children {
    id?: string;
    classnames?: string;
}

export interface RootLayoutProps extends Children {}

export interface ButtonProps extends Children {
    href?: string;
    onClick?: () => void;
}

export interface Work {
    company_name: string;
    company_link: string;
    job_title: string;
    tenure?: string;
}

export interface ServiceCardInterface {
    service: {
        icon: string;
        service_name: string;
        service_desc: string;
    };
}

export interface ServiceCardIconInterface {
    icon: string;
}

export interface ModalInterface {
    isOpen: boolean;
    closeModal: () => void;
}

export interface EmailTextProps {
    vertical?: boolean;
}
