const Home = () => {
    return (
        <>
            {/* Section 1 */}
            <>
                {/* <!--Left Col--> */}
                <div className="flex flex-col w-full md:w-2/5 justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                        A
                        <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500">
                            PWA
                        </span>
                        voice diary that tracks feelings.
                    </h1>
                </div>
                {/* <!--Right Col--> */}
                <div className="w-full md:w-3/5 p-12 overflow-hidden">
                    <div className=" w-full transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6">
                        <img className="h-1/8" src={require("../App/pics/demo.png")} alt="on-screen" />
                    </div>
                </div>


            </>

            <>
                <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Abstract</h1>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        Speech is useful for analysing conditions.
                        Typically conducted through phone calls.
                        MobileV is a speech analysis tool.
                        Apps are easier to use and can add data visualisation.
                    </p>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        MobileV only supports Android devices.
                        NudgeShare is a PWA meaning it is more accessible to a wider range of users.
                        It will be optimised for both Desktop and Mobile users + everything in between.
                        We hope that this project will yield in better efficieny than MobileV.
                        We hope to provide all the features of the existing Flutter app from MobileV does.
                    </p>
                </div>
                {/* <div class="stats shadow bg-transparent">
                    <div class="stat place-items-center">
                        <div class="stat-title">Happy Users</div>
                        <div class="stat-value">12</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Total Recordings Made</div>
                        <div class="stat-value text-secondary">1000</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Analysis Done</div>
                        <div class="stat-value text-secondary">25</div>
                    </div>
                    <div class="stat place-items-center">
                        <div class="stat-title">Requirements Achieved</div>
                        <div class="stat-value">ALL</div>
                    </div>

                </div> */}
            </>
            <>
                <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Features</h1>
                    <div className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        <p>NudgeShare design and interface comes from MobileV Flutter application so existing users can transfer with ease. </p>
                        <div class="flex mx-auto  w-12/12 flex-row gap-x-3">
                            <div class="grid flex-grow card rounded-box place-items-center"> <figure><img className="w-full transform transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6" src={require('../App/pics/home/recordings.png')} alt="old-app" /></figure></div>
                            <div class="grid flex-grow card h-3/6 rounded-box place-items-center"><figure><img className="w-full transform  transition hover:scale-105 duration-700 ease-in-out" src={require('../App/pics/home/wordcloud.png')} alt="old-app" /></figure></div>
                            <div class="grid flex-grow card rounded-box place-items-center"> <figure><img className="w-full transform transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={require('../App/pics/home/analysis.png')} alt="old-app" /></figure></div>
                        </div>

                    </div>

                </div>
            </>
            <>
                <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Demo Video</h1>
                    <div className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">

                    </div>

                </div>
            </>
            <>
                <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">The Team</h1>
                    <div>
                        <h1 className="my-4 text-md md:text-2xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Team Lead - Dinesh Anantharaja</h1>
                        <div className="leading-normal text-base md:text-xl mb-8 text-center md:text-left">
                            Dinesh is a 2nd year Computer Science student at UCL and is the lead developer for the NudgeShare project.
                            He is interested in Mobile and Web development as well as machine learning.
                            It is his first time developing a full-scale React application.
                        </div>
                    </div>
                    <div>
                        <h1 className="my-4 text-md md:text-2xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Team Member - Jay McCaughrean</h1>
                        <div className="leading-normal text-base md:text-xl mb-8 text-center md:text-left">
                            [Add jays info]
                        </div>
                    </div>
                    <div>
                        <h1 className="my-4 text-md md:text-2xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Team Member - Nick</h1>
                        <div className="leading-normal text-base md:text-xl mb-8 text-center md:text-left">
                            [Add nicks info]
                        </div>
                    </div>

                </div>
            </>
        </>
    )
}
export default Home;