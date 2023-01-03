export interface Children {
    children: React.ReactNode;
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
        service_name: string;
        service_desc: string;
    };
}

export interface ModalInterface {
    isOpen: boolean;
    closeModal: () => void;
}
