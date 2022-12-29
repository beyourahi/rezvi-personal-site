export interface Children {
    children: React.ReactNode;
}

export interface RootLayoutProps extends Children {}

export interface ButtonProps extends Children {
    href: string;
}

export interface Work {
    company_name: string;
    company_link: string;
    job_title: string;
    tenure?: string;
}
