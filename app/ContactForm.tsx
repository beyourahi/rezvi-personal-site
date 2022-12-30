export const ContactForm = () => (
    <div className="w-full">
        <form className="flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-5">
            <input
                type="text"
                placeholder="Name"
                className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-heading"
            />

            <input
                type="email"
                placeholder="Email Address"
                className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-heading"
            />

            <input
                type="tel"
                placeholder="Phone Number"
                className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-heading"
            />

            <input
                type="text"
                placeholder="Comapany or Organization"
                className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-heading"
            />

            <textarea
                rows={5}
                placeholder="Write your message..."
                className="col-span-2 row-span-3 p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none resize-none font-ps bg-white/10 md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-heading"
            />

            <button
                type="submit"
                className="col-span-2 py-4 text-lg font-bold tracking-wider text-center transition-all ease-in border rounded-lg border-coolGreen hover:bg-coolGreen/10 px-9 text-coolGreen"
            >
                Submit
            </button>
        </form>
    </div>
);
