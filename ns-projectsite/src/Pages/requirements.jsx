const Requirements = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Requirements</span>
                </h1>
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title  bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Project Overview
                    </h1>


                    <p className="text-left collapse-content bg-base-100">
                        The NHS sees speech analysis as a area of promise in the treatment of various conditions. For example, it can be associated
                        with depression and bipolar disorder.
                        This data is usually collected over phone calls and analysed after some delay which can be cumbersome to both the patient and the health care provider.

                        The objective was to create a tool to simplify the whole process
                        (collect speech data and perform analysis automatically with a way to visualise the data)
                        and create a system that will be available to a wider reach of users.
                    </p>

                </div>
                <div className="divider" />

                <div tabIndex="0" className="collapse collapse-arrow container focus:border focus:border-base-300 focus:bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Client Requirements
                    </h1>
                    <div className="collapse-content">
                        <p className="text-left">
                            We met our client <span className="text-sky-500">(Dr Joseph Connor)</span> to discuss the requirements for our application. We agreed on regular weekly meetings where we can update him on the progress at each stage getting feedback as well.
                            You can find a summary of these meetings here. </p>
                        <p className="my-3">
                            He said that there was an existing Mobile App (called MobileV) currently in use made as a Masters project, but because of its restriction on running on limited devices, it was not as effective as intended.
                        </p>
                    </div>
                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Project Goal
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>The main requirement of the new application was to bring MobileV into a PWA format meaning it is runnable and installable on all devices with browser from Mobile to Desktop.
                            The client added that it should use the same prewritten Flask Backend as the previous iteration.</p>
                        <div class="mx-auto mb-3 card w-1/2 md:w-1/3 bg-base-100 shadow-xl md:flex-row">
                            <figure><img src={require('../App/pics/old-app/old-app-4.png')} alt="old-app" /></figure>
                            <div class="card-body font-light w-fit h-fit">
                                <p>A screenshot from MobileV application.</p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 justify-center">
                            <div>
                                <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold"> Mobile-V</h3>
                                <li>Limited device support (only works on Android)</li>
                                <li>Large Bundle Size</li>
                            </div>
                            <div>
                                <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">NudgeShare</h3>
                                <li>Can run inside browser.</li>
                                <li>Instable on all devices with browser</li>
                                <li>Low bundle size</li>
                                <li>Uses the same backend so no comprimises</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse collapse-arrow container focus:border focus:border-base-300 focus:bg-base-100 rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; MoSCoW Requirements
                    </h1>
                    <div className="collapse-content">
                        <h2 className="transform transition hover:scale-105 duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-bl from-emerald-400 via-yellow-200 to-green-600 text-center text-xl md:text-2xl underline-offset-4 mb-8 underline decoration-pink-600">
                            The User App
                        </h2>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Must Have</h3>
                        <li>Record journal entries of up to 10 minutes</li>
                        <li>Record journal entries with a predetermined duration (e.g. 30s)</li>
                        <li>Give entries a name, description and up to 3 scores (set by SRO)</li>
                        <li>View a list of stored journal entries</li>
                        <li>Listen to specific journal entries and view/edit associated data</li>
                        <li>Request transcription for a journal entry</li>
                        <li>View a word cloud for a journal entry if it has been transcribed</li>
                        <li>Delete stored journal entries and associated data</li>
                        <li>View graphs summarising speaking rate and scores over time</li>
                        <li>Interact with these graphs to view word clouds for specific days</li>
                        <li>Consent to automatically share self-specified data with their SRO</li>
                        <li>Manually share entry data with contacts via WhatsApp</li>
                        <li>Change their password</li>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Should have</h3>
                        <li>Filter journal entries being displayed (e.g. by date)</li>
                        <li>View graphs summarising usage (e.g. minutes journaled per week)</li>
                        <li>Opt-in to receive reminders once per week to record an entry</li>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Could have</h3>
                        <li>Reset their password</li>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Won't have</h3>
                        <li>Receive NLU insights on their transcripts (e.g. emotion recog.)</li>
                        <li>Register themselves (Admins retain 100% control)</li>
                        <h2 className="transform transition hover:scale-105 duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-bl from-emerald-400 via-yellow-200 to-green-600 text-center text-xl md:text-2xl underline-offset-4 mb-8 underline decoration-pink-600">
                            Non-functional
                        </h2>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Must Have</h3>
                        <li>Ensure the portal functions in any mainstream desktop browser</li>
                        <li>Provide a cross-platform (iOS/Android), responsive app</li>
                        <li>Use a Linode virtual machine (VM) to host the back-end</li>
                        <li>Use standard, reliable technologies offering high uptime</li>
                        <li>Use IBM STT to transcribe uploaded audio</li>
                        <li>Convert audio files as necessary on the VM, not the user’s device</li>
                        <li>Delete all data sent and received from IBM STT automatically</li>
                        <li>Minimise the amount of user data stored in the back-end</li>
                        <li>Use AES to encrypt sensitive (user) data stored in the back-end</li>
                        <li>Securely hash user passwords stored in the back-end</li>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Should Have</h3>
                        <li>Use a secure communication protocol (SSL or TLS)</li>
                        <li>Process API calls within 2 seconds on average</li>
                        <li>Make the process of recording in the app as seamless as possible</li>
                        <h3 className="underline-offset-2 underline decoration-pink-600 bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Won't Have</h3>
                        <li>Publish the app in the Apple or Google app stores</li>
                        <li>Store encrypted audio recordings on the user’s mobile device</li>
                    </div>




                </div>







            </div>


        </>
    )
}

export default Requirements