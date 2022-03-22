const Footer = () => {
    return (
        <footer className="footer w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <div>
                <p>NudgeShare.<br />Providing reliable tech since 1992</p>
                <a className="text-gray-500 no-underline hover:no-underline" href="/">&copy; App 2020  - Template by TailwindToolbox.com</a>
            </div>


            <div>
                <span class="footer-title font-extrabold">Source Code</span>
                <div class="grid grid-flow-col gap-4">
                    <img src={require('../App/pics/GitHub-Mark-Light-120px-plus.png')} alt='appstore' className="h-10 pr-12" />
                </div>
            </div>
        </footer >
    )
}
export default Footer