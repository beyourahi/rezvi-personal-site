"use client";

import { useRef, useState } from "react";
import { Modal } from "@/app/utils";
import { Roboto_Mono } from "@next/font/google";
import { sendFormInfo } from "./sendFormInfo";

const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const ContactForm = () => {
    const form = useRef();
    let [isOpen, setIsOpen] = useState(false);
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        sendFormInfo(form, openModal, closeModal);
    };

    {
        return isOpen ? (
            <Modal
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
            />
        ) : (
            <div className="w-full">
                <form
                    className="flex flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-5"
                    ref={form}
                    onSubmit={handleSubmit}
                >
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-subHeading"
                    />

                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        required
                        className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-subHeading"
                    />

                    <input
                        type="tel"
                        placeholder="Phone Number"
                        name="phone"
                        required
                        className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-subHeading"
                    />

                    <input
                        type="text"
                        placeholder="Company or Organization"
                        name="company"
                        className="p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none bg-white/10 font-ps md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-subHeading"
                    />

                    <textarea
                        rows={5}
                        placeholder="Write your message..."
                        name="message"
                        required
                        className="col-span-2 row-span-3 p-4 text-base font-normal text-white transition-all ease-in border-none rounded-lg outline-none resize-none font-ps bg-white/10 md:text-lg focus:outline-coolGreen focus:outline-offset-0 focus:outline-2 focus:rounded-lg placeholder:text-subHeading"
                    />

                    <button
                        type="submit"
                        className={`${roboto_mono.className} col-span-2 px-8 py-4 text-base font-bold tracking-wider text-center transition-all ease-in border rounded-lg cursor-pointer border-coolGreen text-coolGreen hover:bg-coolGreen/10 active:scale-95`}
                    >
                        Submit
                    </button>
                </form>
            </div>
        );
    }
};
