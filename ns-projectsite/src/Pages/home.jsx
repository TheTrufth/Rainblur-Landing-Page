const Home = () => {
    return (
        <>
            {/* Section 1 */}
            <>
                {/* <!--Left Col--> */}
                <div className="flex flex-col w-full md:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                        Use your
                        <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500">
                            voice.
                        </span>
                    </h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        Unlike a normal diary where you would write, create a vocal record
                        which you can share with your healthcare provider.
                    </p>

                    <div class="stats shadow bg-transparent">
                        <div class="stat place-items-center">
                            <div class="stat-title">Downloads</div>
                            <div class="stat-value">31K</div>
                            <div class="stat-desc">From January 1st to February 1st</div>
                        </div>

                        <div class="stat place-items-center">
                            <div class="stat-title">Users</div>
                            <div class="stat-value text-secondary">4,200</div>
                            <div class="stat-desc text-secondary">↗︎ 40 (2%)</div>
                        </div>

                    </div>
                </div>

                {/* <!--Right Col--> */}
                <div className="w-full md:w-3/5 p-12 overflow-hidden">
                    <div className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">

                        <img src={require("../App/pics/demo.png")} alt="on-screen" />

                    </div>

                </div>


            </>

            <>
                <div className="flex flex-col w-full md:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Built for Mobile + Desktop + Everything in-between</h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        Our app is optmised for modern use, whether your on Desktop or on Mobile
                    </p>
                </div>
            </>
        </>
    )
}
export default Home;