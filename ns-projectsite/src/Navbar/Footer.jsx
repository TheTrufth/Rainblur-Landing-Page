const Footer = () => {
    return (
        <footer className="footer w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <img src={require('../App/pics/our_pics/IXN_logo.png')} alt='appstore' className="h-14 brightness-0 invert text-white " />
            <div>
                <p>Thank you Joesph Connor for your support on this project!</p>
                <a className="text-gray-500 no-underline hover:no-underline" href="/">&copy; NudgeShare 2022  - Website Template by TailwindToolbox.com</a>
            </div>


            <div>
                <span class="footer-title font-extrabold">Source Code</span>
                <div class="grid grid-flow-col ">
                    <img src={require('../App/pics/GitHub-Mark-Light-120px-plus.png')} alt='appstore' className="h-10 pr-12" />
                </div>
            </div>
        </footer >
    )
}
export default Footer