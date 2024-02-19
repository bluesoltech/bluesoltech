import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';



const Questions = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div className="bg-black mx-auto p-6 mt-10">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div
                        className="flex items-center justify-between bg-gray-200 pl-3 pr-2 py-3 w-full rounded text-gray-600 font-bold cursor-pointer hover:bg-gray-300"
                        onClick={() => toggleQuestion(index)}
                    >
                        {faq.question}
                        <span className="h-6 w-6 flex items-center justify-center text-black">
                            {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                    </div>
                    {openIndex === index && (
                        <div className="p-3">
                            {faq.answer.map((paragraph, index) => (
                                <p key={index} className="text-gray-600 mb-3">{paragraph}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Questions