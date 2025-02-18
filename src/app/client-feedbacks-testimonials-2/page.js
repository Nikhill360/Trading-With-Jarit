'use client';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function ClientFeedbacksTestimonials2() {
    const [selectedImage, setSelectedImage] = useState(null);

    const images = [
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/3.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/Screenshot_20250201_142351_Instagram.jpg",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/2.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/1.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/5-11.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/3-13.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/2-18.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/1-8.png",
        "https://tradingwithjarit.in/wp-content/uploads/2025/02/Screenshot_20250201_142356_Instagram.jpg",
    ];

    return (
        <><div className="relative bg-[#032b1f] text-white pl-24 pt-5 
        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:shadow-md before:shadow-white
        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] after:shadow-md after:shadow-white"
      >
          <h1 className="text-[#ffde72] text-5xl tracking-tighter leading-1 font-semibold mb-4">
              Client Feedbacks
          </h1>
          <p className="tracking-normal pt-10 pb-10 text-[2.8vh]">
              TWJ was founded 6 years ago by Jarit Munjal. Since then, we have satisfied thousands of clients and earned their valuable trust. 
              We are very grateful to our clients for sharing their feedback with us.
          </p>
      </div>
      

            {/* Image Grid */}
            <div className="bg-[#093c27] grid grid-cols-3 gap-4 pl-24 pb-16 pr-24 pt-10">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Client feedback ${index + 1}`}
                        className="w-full h-auto cursor-pointer transition-transform duration-200 hover:scale-105"
                        onClick={() => setSelectedImage(img)}
                    />
                ))}
            </div>

            {/* Popup Modal */}
            {selectedImage && (
                <motion.div
                    className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImage(null)}
                >
                    <motion.img
                        src={selectedImage}
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                    />
                </motion.div>
            )}
        </>
    );
}
