
function Contact() {
  return (
    <div className="flex justify-evenly items-start mt-20">
         <div>
             <h1 className="poppins-extrabold text-8xl text-[#D33F49]"> Let's Get in Touch</h1>
        </div>
        <div className="flex flex-col justify-center items-center bg-[#D7C0D0] w-full h-70 rounded-tl-full rounded-bl-full">
        <form action="" className="flex flex-col gap-2 poppins-regular">
            <input className="border-none bg-[#EFF0D1] w-xl rounded-sm" type="text" name="" placeholder="Your Name" id="" />
            <input className="border-none bg-[#EFF0D1] w-xl rounded-sm" placeholder="Your email id" type="email" name="" id="" />
            <input className="border-none bg-[#EFF0D1] w-xl rounded-sm h-20" type="text" name="" placeholder="Your message" id="" />
            <button className="bg-[#D33F49] h-11 w-xl text-center rounded-sm hover:bg-[#77BA99] " type="submit"> Send </button>
        </form>
        </div>
    </div>
  )
}

export default Contact