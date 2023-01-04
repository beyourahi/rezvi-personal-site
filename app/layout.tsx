import "./globals.css";
import { RootLayoutProps } from "types";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({ subsets: ["latin"] });

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => (
    <html lang="en">
        <head />
        <body className={`bg-theme ${open_sans.className}`}>
            <main className="space-y-40">{children}</main>
        </body>
    </html>
);

export default RootLayout;
