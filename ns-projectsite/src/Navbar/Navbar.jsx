
import { Link, Outlet } from "react-router-dom"

const Navbar = () => {

    return (
        <div className={`w-full container mx-auto`}>
            <div className="w-full flex items-center justify-between relative">
                <a className="flex items-center text-indigo-400 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="ns-projectsite/">
                    <span className="hidden md:block"> Nudge<span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">Share</span></span>
                </a>

                <div className="flex w-1/2 justify-end  flex-row flex-wrap">
                    <a href="/ns-projectsite/" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Home</a>
                    <Link to="ns-projectsite/requirements" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Requirements</Link>
                    <Link to="ns-projectsite/research" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Research</Link>
                    <Link to="ns-projectsite/hci" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">HCI</Link>
                    <Link to="ns-projectsite/design" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Design</Link>
                    <Link to="ns-projectsite/testing" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Testing</Link>
                    <Link to="ns-projectsite/implementation" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Implementation</Link>
                    <Link to="ns-projectsite/evaluation" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Evaluation</Link>
                    <Link to="ns-projectsite/appendix" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Appendix</Link>
                    <a target={"_blank"} rel="noreferrer" href="https://thetrufth.github.io/mobile-v-Blog/" className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out">Blog</a>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
export default Navbar