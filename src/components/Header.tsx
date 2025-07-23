import { NavLink } from "react-router"
import {Link as ScrollLink} from "react-scroll";

function Header() {
  return (
    <nav className="flex bg-white text-black justify-between items-center w-full h-[70px] p-5">
        <div className="flex justify-center ml-1 poppins-extrabold">
            <h1> Image Classifier</h1>
        </div>
        <div className="flex justify-between gap-6 items-center poppins-regular h-4">
            <div className="rounded-sm h-6 w-auto m-1 hover:bg-[#D33F49] px-2 hover:text-white"><NavLink to="/"className={({isActive})=>
                isActive? "bg-[#D33F49] px-2 text-white rounded-sm": ""}>Home</NavLink></div>
            <div className="rounded-sm h-6 w-auto m-1 hover:bg-[#D33F49] px-2 cursor-pointer hover:text-white" ><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></div>
            <div className="rounded-sm h-6 w-auto m-1 hover:bg-[#D33F49] px-2 cursor-pointer hover:text-white"><ScrollLink to="contact" smooth={true} duration={500}>Contact</ScrollLink></div>
            <div className="rounded-sm h-6 px-2 w-auto m-1 hover:bg-[#D33F49] hover:text-white"><NavLink to="/predict"className={({isActive})=>
                isActive? "bg-[#D33F49] rounded-sm px-2 text-white": ""}>Predict</NavLink></div>
        </div>
        <div>
            <button className="border-2 border-black bg-[#77BA99] cursor-pointer hover:bg-[#D7C0D0] w-[100px] h-7 mr-1 poppins-medium">Try Now</button>
        </div>
    </nav>
  )
}

export default Header