export default function popup(){
    return(

        <div className=" bg-transparent h-screen flex items-center justify-center "> 
                        
                        
        <div className="relative bg-white w-1/2 h-1/2 rounded-[5vh]  gap-8 flex flex-col text-center p-10">
        <div className="absolute top-4 text-black font-bold right-6 text-4xl">X</div>


            <div className=" gap-y-2">
                <h1 className="text-6xl text-[#000f2b] font-bold">CHOOSE YOUR PAYMENT OPTION</h1>
                <h1 className="text-xl text-[#3a3a3a] "> 🌑Product : PC Software Without OTC</h1>
            </div>



            <div className="flex flex-row  items-center justify-center gap-8 ">

            <div className="border-2 border-[#1a6c7a] px-9 py-2 text-[#1a6c7a] hover:bg-[#1a6c7a] hover:text-white"> PAY ₹3499 BY  <br /> UPI/GPAY/PAYTM/PHONEPAY </div>
            <div className="border-2 border-[#1a6c7a] px-9 py-2 text-[#1a6c7a] hover:bg-[#1a6c7a] hover:text-white"> PAY $40 BY <br />  VISA/MASTERCARD/PAYPAL</div>

            </div>




        </div>
    

    </div>
    );
}