import Navbar from "../Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/home";
import Footer from "../Navbar/Footer";
import Requirements from "../Pages/requirements";

export default function App() {
    return (
        <body className="leading-normal p-6 tracking-normal text-indigo-400 bg-cover bg-fixed">
            <div className="h-full">
                {/* <!--Nav--> */}
                <Navbar />

                {/* <!--Main--> */}
                <div className="container pt-10 md:pt-20 mx-auto flex flex-wrap flex-col md:flex-row items-center">
                    <Routes>
                        <Route path="*" element={<Home />} />
                        <Route path='/requirements' element={<Requirements />} />
                    </Routes>
                    {/* <!--Footer--> */}
                    <Footer />
                </div>
            </div>
        </body>
    )
}