import emailjs from "@emailjs/browser";

const SERVICE_ID = "contact_service";
const TEMPLATE_ID = "contact_form";
const PUBLIC_KEY = "yNfk0PUilDxSBLX7s";

export const sendFormInfo = async (form, openModal, closeModal) => {
    try {
        const res = await emailjs.sendForm(
            `${SERVICE_ID}`,
            `${TEMPLATE_ID}`,
            form.current,
            `${PUBLIC_KEY}`
        );

        //! Reset the form after sending the data
        form.current.reset();

        //! Add a modal to show the status of the form
        openModal();

        //! Close the modal after 5 seconds
        setTimeout(() => closeModal(), 5000);

        console.log(`Status: ${res.status}`);
        console.log(`Message: ${res.text}`);
    } catch (error) {
        console.error(error);
    }
};
