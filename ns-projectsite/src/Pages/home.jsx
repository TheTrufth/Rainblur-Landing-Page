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
                        Speech is useful for analysing conditions like depression.
                        It is typically surveyed through phone calls which takes time to record and analyse.
                        MobileV is a <b>speech analysis tool</b>.
                        Apps are easier to use and can add <b>data visualisation</b>.
                    </p>
                    <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        MobileV only supports Android devices.
                        NudgeShare is a <b>PWA</b> meaning it is more accessible to a wider range of users.
                        It is optimised for both Desktop and Mobile users + everything in between.
                        We hope that this project will yield in larger user base than MobileV.
                    </p>
                </div>

            </>
            <>
                <div className="flex flex-col w-full justify-center lg:items-start overflow-y-hidden">
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Features</h1>
                    <div className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        <p>NudgeShare design and interface comes from MobileV's Flutter application so existing users aren't forced to change to a new environment. Since it shares the same backend Flask code as MobileV, all data (account, recordings, etc.) can be transfered onto the new server.  </p>
                        <ul class="flex mx-auto  w-12/12 flex-row gap-x-3 steps steps-horizontal">
                            <div class="grid flex-grow card rounded-box place-items-center">
                                <figure><img className="w-full transform transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6" src={require('../App/pics/home/recordings.png')} alt="old-app" /></figure>
                                <li className="step step-warning">Add recording</li>
                            </div>
                            <div class="grid flex-grow card h-3/6 rounded-box place-items-center">
                                <figure><img className="w-full transform  transition hover:scale-105 duration-700 ease-in-out" src={require('../App/pics/home/wordcloud.png')} alt="old-app" /></figure>
                                <li className="step step-warning">Share with SRO & View transcript/wordcloud</li>
                            </div>
                            <div class="grid flex-grow card rounded-box place-items-center">
                                <figure><img className="w-full transform transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src={require('../App/pics/home/analysis.png')} alt="old-app" /></figure>
                                <li className="step step-warning">Get visual representation of how your progress is!</li>
                            </div>
                        </ul>

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
                    <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">Gantt Chart</h1>
                    <div className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                        <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left">
                            Here is the Gantt Chart listing our progress and milestones throughout the project.
                        </p>
                        <figure><img className="w-8/12 rounded-xl mx-auto transform transition hover:scale-105 duration-700 ease-in-out hover:-rotate-6" src={require('../App/pics/gantt/gantt.png')} alt="old-app" /></figure>
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