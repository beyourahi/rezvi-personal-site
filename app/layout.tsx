import "./globals.css";
import { RootLayoutProps } from "types";
import { Open_Sans } from "@next/font/google";
import { Email, Socials } from "@/app/components";

const open_sans = Open_Sans({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
    <html lang="en">
        <head />
        <body className={`bg-theme ${open_sans.className}`}>
            <Socials />
            {children}
            <Email />
        </body>
    </html>
);

export default RootLayout;
