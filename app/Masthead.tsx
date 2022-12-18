import { brandName, tagline, description } from "data.json";

const Masthead = () => {
    return (
        <div className="flex flex-col items-start justify-center h-screen space-y-10 px-7">
            <div className="space-y-6">
                <div className="space-y-2">
                    <h4 className="text-lg text-coolGreen">Hi, my name is</h4>

                    <h1 className="text-[2.5rem] font-extrabold text-heading">
                        {brandName}.
                    </h1>

                    <h2 className="text-3xl font-extrabold text-subHeading">
                        {tagline}.
                    </h2>
                </div>

                <p className="text-lg text-subHeading">{description}</p>
            </div>

            <button className="px-8 py-4 text-base tracking-wider transition-all border rounded-md border-coolGreen text-coolGreen hover:bg-coolGreen/10">
                Get In Touch!
            </button>
        </div>
    );
};

export default Masthead;
