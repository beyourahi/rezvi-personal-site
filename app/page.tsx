import {
    Masthead,
    About,
    WorkExperiences,
    Services,
    Contact,
    Footer,
} from "@/app/components";

const Home = () => (
    <main className="space-y-40">
        <Masthead />
        <About />
        <WorkExperiences />
        <Services />
        <Contact />
        <Footer />
    </main>
);

export default Home;
