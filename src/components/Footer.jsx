import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white text-green-900 p-20 flex flex-col md:flex-row justify-between items-center relative">
            <div className="flex space-x-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-green-900">
                    <FaFacebook size={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-green-900">
                    <FaInstagram size={24} />
                </a>
                <a href="mailto:someone@example.com" className="text-green-900">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="/about-us" className="text-green-900">About Us</a>
                <a href="/return-policy" className="text-green-900">Return Policy</a>
                <a href="/privacy-policy" className="text-green-900">Privacy Policy</a>
            </div>
            
            <div className="text-center w-full absolute text-green-900 left-[1vh] border-t-[1.8px] border-green-900 bottom-0">
                <p>Copyright © 2025 Trading With Jarit | Powered by Trading With Jarit</p>
                <p>All rights reserved.</p>
            </div>
        </footer> 
        
        
    );
}

