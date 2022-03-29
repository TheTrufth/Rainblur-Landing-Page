import Navbar from "../Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Footer from "../Navbar/Footer";
import Requirements from "../Pages/requirements";
import { useEffect, useState } from "react";
import Design from "../Pages/design";
import Research from "../Pages/research";
import Implementation from "../Pages/implementation";
import Appendix from "../Pages/appendix";
export default function App() {
    const [stickyClass, setStickyClass] = useState('relative');

    useEffect(() => {
        window.addEventListener('scroll', stickNavbar);

        return () => {
            window.removeEventListener('scroll', stickNavbar);
        };
    }, []);

    const scrollToTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };

    const stickNavbar = () => {
        if (window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 30 ? setStickyClass('w-fit sticky bottom-0 z-10') : setStickyClass('hidden');
        }
    };

    return (
        <body className="leading-normal tracking-normal text-indigo-400 bg-cover bg-fixed">
            <div className="h-full">
                {/* <!--Nav--> */}

                <Navbar />

                {/* <!--Main--> */}
                <div className="container pt-10 md:pt-20 flex flex-wrap flex-col md:flex-row items-center p-6">
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path='ns-projectsite/requirements' element={<Requirements />} />
                        <Route path='ns-projectsite/design' element={<Design />} />
                        <Route path='ns-projectsite/research' element={<Research />} />
                        <Route path='ns-projectsite/implementation' element={<Implementation />} />
                        <Route path='ns-projectsite/appendix' element={<Appendix />} />
                    </Routes>
                    {/* <!--Footer--> */}



                </div>
                <div className={"container mx-auto float-right mr-9 md:mr-28 mb-16 " + stickyClass}>
                    <button onClick={() => { scrollToTop() }} className="btn btn-circle btn-lg float-right btn-primary text-white p-5 relative transition-all duration-300 ease-in-out animate-bounce">^</button>
                </div>
                <div className="container pt-10 md:pt-20 mx-auto p-6">
                    <Footer />
                </div>
            </div>
        </body>
    )
}