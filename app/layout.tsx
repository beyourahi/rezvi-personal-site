import "./globals.css";
import { Roboto } from "@next/font/google";
import { RootLayoutProps } from "types";
import { Socials } from "./Socials";
import { Email } from "./Email";

const roboto = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
    <html lang="en">
        <head />
        <body className={`${roboto.className} bg-theme text-white`}>
            <Socials />
            {children}
            <Email />
        </body>
    </html>
);

export default RootLayout;
