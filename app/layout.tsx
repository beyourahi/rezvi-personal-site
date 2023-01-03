import "./globals.css";
import { RootLayoutProps } from "types";
import { Socials } from "./Socials";
import { Email } from "./Email";
import { Roboto_Mono, Open_Sans } from "@next/font/google";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });
const open_sans = Open_Sans({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
    <html lang="en">
        <head />
        <body className={`${open_sans.className} bg-theme`}>
            <Socials />
            {children}
            <Email />
        </body>
    </html>
);

export default RootLayout;
