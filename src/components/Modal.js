
import React from 'react';

function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 h-full w-full flex items-center justify-center bg-black bg-opacity-25  backdrop-blur-sm">
            <div className="bg-[#F7F9FC]  p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-2xl font-montserrat font-semibold mb-4">Become a LandPro Investor!</h2>
                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name" required />

                <input
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    placeholder="Email / Phone Number" required />
                <textarea
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="textarea"
                    placeholder="Comment" required />
                <button className="button-bg text-[#2A2B39] w-28 font-montserrat font-semibold py-2 px-4 my-6 Tablet:my-4 mx-4 rounded">
                    Submit
                </button>
                <button
                    className=" text-[#2A2B39] border  w-28 font-montserrat font-semibold py-2  px-4 ml-4 Tablet:ml-0 rounded"
                    onClick={onClose}>
                    Close
                </button>

            </div>
        </div>
    );
}

export default Modal;
