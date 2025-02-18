import Link from "next/link";

export default function Forex() {
    return (
        <div className="bg-[#093c27] min-w-sm  min-h-sm pl-2 pt-2">
            <h1 className="text-[#ffde72] text-5xl tracking-tighter leading-1 font-semibold mb-4 ">How to use TWJ LIVE SIGNALS SOFTWARE to trade in forex market ?</h1>
            <p className="tracking-normal mt-10 mb-6 text-[2.8vh]">You can use TWJ LIVE SIGNALS SOFTWARE in forex with the same confirmations as in binary; however, the timeframe matters a lot. It depends whether you want to take a forex position for a few hours to minutes (known as scalping), intraday, or weekly timeframe</p>

            <p className="text-[2.8vh] mb-6">So this should be your perfect timeframe</p>
            <div>
                <h1 className="text-[2.8vh] mb-6">✅FOR SCALPING- 5 MIN TIMEFRAME</h1>
                <h1 className="text-[2.8vh] mb-6">✅INTRADAY – 30 MIN TIMEFRAME</h1>
                <h1 className="text-[2.8vh] mb-6">✅SWING TRADE – 4H OR DAILY TIMEFRAME</h1>

            </div>

            <div className="mt-16">
                <h1 className="text-[#ffde72] text-5xl tracking-tighter leading-1 font-semibold mb-4 ">How to set target & sl in forex using the software ?</h1>
                <p className="tracking-normal mt-10 mb-6 text-[2.8vh]">So for this you need to keep 2 things in mind , first one is ( RRR which means risk to reward ratio ) and second one is the important support and resistance zones</p>
            </div>

            <div className="relative pt-5 ml-[-8] w-screen h-50 flex justify-between bg-[#032b1f] 
                            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[5px] before:shadow-md before:shadow-white
                            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[5px] after:shadow-md after:shadow-white">
                <div className="pl-10 w-[50%]">
                    <img src="https://tradingwithjarit.in/wp-content/uploads/2025/02/IMG_20250101_185421_124-2-1024x463-1.jpg" className="w-[100%] pl-10" />
                </div>
                <div className="w-[50%]">
                    <h1 className="text-[#fffdde] leading-8 tracking-wide pl-6">
                        The RRR (risk to reward ratio) should be more than 1:2 for better trades. 1:2 to 1:4 are very good ratios. In simple words, if your target is 100 pips away from entry and stop loss is only 25 pips, it means the risk-to-reward ratio is highly good at 1:4.
                    </h1>
                </div>
                       
                  

            </div>

            <div className="flex justify-center mt-10">
            <Link href={"/twj-pc-software-2"} className="  mb-10 bg-white text-[#032b1f] pl-[70vh] pr-[70vh] pt-2 pb-2 ">KNOW MORE ABOUT TWJ SIGNAL SOFTWARE</Link>

            </div>
            

           



        </div>


    )
} 