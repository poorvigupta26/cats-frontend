import cat from "../assets/cat.jpg"
import dog from "../assets/dog-1.jpg"
import About from "../components/About"
import Contact from "../components/Contact"

function Home() {
  return (
    <>
    <div className="flex mt-40 pl-5 w-full h-[100vh]">
      <div className="flex flex-col justify-start items-start">
        <h1 className="poppins-extrabold text-6xl">Cats or Dogs? The Ultimate Face Off in Pixels</h1>
        <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, tenetur culpa ipsa eius repudiandae nulla, quas consectetur maiores voluptate reprehenderit veniam placeat autem at ducimus omnis consequatur sint! Voluptatibus, sapiente?</p>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-start">
          <div className="bg-[#D33F49] h-24 w-xl pl-24"></div>
        </div>
        {/* <div className="flex justify-center items-center absolute pt-22">
          <div className="border-8 border-[#77BA99] h-35 w-35"></div>
        </div> */}
        <div className="flex mt-[-50px]">
           <div className="bg-[#77BA99] mt-[-10px] ml-[-10px] rounded-full h-40 w-40 absolute"></div>
        </div>
        <div className="flex mt-10">
          <div className="bg-[#D7C0D0] h-60 w-xl pl-24 rounded-tl-full rounded-bl-full absolute p-10"></div>
        </div>
        <div className="flex justify-between">
          <div><img src={cat} alt="" className="h-50 w-50 rounded-full relative" /></div>
          <div><img src={dog} alt="" className="h-80 w-80 rounded-full relative mt-[-100px]" /></div>
        </div>
      </div>
    </div>
    <div id="about" className="h-[100vh] w-full">
      <About/>
    </div>
    <div id="contact" className="h-[100vh] w-full">
      <Contact/>
    </div>
    </>

  )
}

export default Home