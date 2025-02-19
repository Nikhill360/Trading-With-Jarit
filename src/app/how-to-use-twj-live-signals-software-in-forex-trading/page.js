'use client'

import Link from "next/link";
import { useState } from "react"; // Added useState for managing open state
import { FaCircle } from "react-icons/fa6";

export default function Forex() {
    const [open, setOpen] = useState(false); // Initialize open state

    return (
        <>
            <div>
                
                <h1 className="text-center text-5xl  font-bold text-[#FFDE72]">Frequently Asked Questions</h1>

                <div className="flex-col flex justify-center ">


                <div className="relative p-4">
                    <h1 className="cursor-pointer p-1 bg-[#757575] font-semibold text-xl" onClick={() => setOpen(open === 1 ? null : 1)}>In which brokers can i use the software?</h1>
                    <div className={`transition-all duration-300 ease-in-out bg-[#757575] p-4 rounded ${open === 1 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div>You can use it in any binary broker like quotex, binomo, olymptrade, iqoption, pocket option.</div>
                    </div>
                </div>
                
                <div className="relative p-4">
                    <h1 className="cursor-pointer px-1 bg-[#757575] font-semibold text-xl" onClick={() => setOpen(open === 2 ? null : 2)}>Is there any difference between mobile & pc software ?</h1>
                    <div className={`transition-all duration-300 ease-in-out bg-[#757575] p-4 rounded ${open === 2 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div>There is no difference, software is same just the installation process is different which can be done through anydesk / teamviewer app.</div>
                    </div>
                </div>

                <div className="relative p-4">
                    <h1 className="cursor-pointer px-1 bg-[#757575] font-semibold text-xl" onClick={() => setOpen(open === 3 ? null : 3)}>How much signals does it gives & any specific time ?</h1>
                    <div className={`transition-all duration-300 ease-in-out bg-[#757575] p-4 rounded ${open === 3 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div>You can use our software anytime as it works 24 hours & unlimited signals.</div>
                    </div>
                </div>

                <div className="relative p-4">
                    <h1 className="cursor-pointer px-1 bg-[#757575] font-semibold text-xl" onClick={() => setOpen(open === 4 ? null : 4)}>What is the accuracy and do you use martingale?</h1>
                    <div className={`transition-all duration-300 ease-in-out bg-[#757575] p-4 rounded ${open === 4 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div>Software accuracy is upto 90-95%+ and martingale is not required as it gives direct winning sureshot signals</div>
                    </div>
                </div>

                <div className="relative p-4">
                    <h1 className="cursor-pointer px-1 bg-[#757575] font-semibold text-xl" onClick={() => setOpen(open === 5 ? null : 5)}>What is the software cost ?</h1>
                    <div className={`transition-all duration-300 ease-in-out bg-[#757575] p-4 rounded ${open === 5 ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div>The software cost is $40 / Rs 3499 including installation and lifetime access. With otc market access it’s $60 / Rs 4999.</div>
                    </div>
                </div>

                </div>
               



                
            </div>
        </>
    );
} 