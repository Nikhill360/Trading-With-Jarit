import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full py-[2vw] bg-[rgb(239, 234, 227)] flex items-center justify-between px-[2vw] bg-[#024430]">
            <img src="/logo/logo.png"
                alt="Sundown Logo"
                className="w-[160px] md:w-[180px] lg:w-[180px]" />
            <ul className="flex space-x-5 text-white text-[14PX] ">
                <li><a href="#home">Home</a></li>
                <li><a href="#twj-pc-software">TWJ-PC-Software</a></li>
                <li><a href="#twj-auto-trading-bot">TWJ-Auto-Trading Bot</a></li>
                <li><a href="#twj-mobile-software">TWJ-Mobile-Software</a></li>
                <li><a href="#client-feedback">Client-Feedback-&-Testimonial</a></li>

                <li><Link  href={"/how-to-use-twj-live-signals-software-in-forex-trading"}>How to use TWJ-Live-Software in Forex</Link></li>
            </ul>
        </nav>

    )
}