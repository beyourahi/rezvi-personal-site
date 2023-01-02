import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ModalInterface } from "types";
import { BsCheck2Circle } from "react-icons/bs";

export const Modal: React.FC<ModalInterface> = ({ isOpen, closeModal }) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-black bg-opacity-80" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md p-6 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                            <Dialog.Title
                                as="h3"
                                className="inline-flex items-center space-x-2 text-xl font-bold leading-6 text-gray-900 xl:text-2xl"
                            >
                                <BsCheck2Circle
                                    size={35}
                                    className="text-teal-600"
                                />
                                <span>Thanks for reaching out!</span>
                            </Dialog.Title>
                            <div>
                                <p className="text-lg text-gray-500 xl:text-xl">
                                    I&apos;ll get back to you soon
                                </p>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="inline-flex justify-center px-6 py-3 text-sm font-bold text-teal-800 transition-all border border-transparent rounded-md bg-coolGreen/40 hover:bg-coolGreen focus:outline-none xl:text-base"
                                    onClick={closeModal}
                                >
                                    Got it, thanks!
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </div>
        </Dialog>
    </Transition>
);
