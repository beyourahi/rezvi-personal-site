import { Contact } from "./Contact";
import { Masthead } from "./Masthead";
import { Footer } from "./Footer";
import { About } from "./About";
import { Experience } from "./Experience";
import { Services } from "./Services";

const Home = () => (
    <main>
        <Masthead />
        <About />
        <Experience />
        <Services />
        <Contact />
        <Footer />
    </main>
);

export default Home;
