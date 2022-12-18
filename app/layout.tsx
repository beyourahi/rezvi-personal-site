import { RootLayoutProps } from "types";
import "./globals.css";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <head />
            <body>{children}</body>
        </html>
    );
};

export default RootLayout;
