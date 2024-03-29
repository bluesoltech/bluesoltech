import React, { useEffect } from "react";

const Getstarted = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className='bg-[#0F0E0E] p-20 items-center'>
            <div className=' w-full md:w-[80%]  mt-4 mx-auto'>
                <div className="container p-8 m-auto justify-center justify-self-center bg-[#0F0E0E] text-white text-center h-[100%] w-[100%]">
                    <div data-tf-live="01HN5FZYP74G76ZKNQNJS05QB9"></div>
                </div>
            </div>
        </div>
    )

};


export default Getstarted