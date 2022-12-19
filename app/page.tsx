import { Contact } from "./Contact";
import { Masthead } from "./Masthead";
import { Footer } from "./Footer";
import { About } from "./About";
import { Experience } from "./Experience";

const Home = () => (
    <main>
        <Masthead />
        <About />
        <Experience />
        <Contact />
        <Footer />
    </main>
);

export default Home;
