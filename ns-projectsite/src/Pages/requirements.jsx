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


                    <p className="text-left collapse-content">
                        The NHS sees speech analysis as a area of promise in the treatment of various conditions. For example, it can be associated
                        with depression and bipolar disorder.
                        This data is usually collected over phone calls and analysed after some delay which can be cumbersome to both the patient and the health care provider.

                        The objective was to create a tool to simplify the whole process
                        (collect speech data and perform analysis automatically with a way to visualise the data)
                        and create a system that will be available to a wider reach of users.
                    </p>

                </div>
                <div className="divider" />

                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Client Requirements
                    </h1>
                    <div className="collapse-content">
                        <p className="text-left">
                            We met our client <span className="text-sky-500">(Dr Joseph Connor)</span> to discuss the requirements for our application. We agreed on regular weekly zoom meetings where we can update him on the progress at each stage getting feedback as well.
                            You can find a summary of these meetings here. </p>
                        <p className="my-3">
                            Initial key requirements were gathered over a <span className="text-sky-500">Zoom</span> meeting
                            from which we made a <span className="text-sky-500">MoSCoW</span> list.
                            Some questions that were asked during this meeting were:
                            <li className='text-info'>How does our project differ from MobileV?</li>
                            <li className='text-info'>Are there any specific frameworks you would like us to use?</li>
                            <li className='text-info'>What is your view on users consent and privacy?</li>
                            He said that there was an existing solution (called <span className="text-sky-500">MobileV</span>) currently in use made as a Masters project, but because of its restriction on running on limited devices, it was not as effective as intended.

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
                        <div class="mx-auto mb-3 card w-1/2 shadow-xl md:flex-row">
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
                                <li>Uses the same backend so account/backend data does not need to be migrated.</li>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='divider' />
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Use Case Diagram
                    </h1>
                    <div className="collapse-content">

                        <img className='mx-auto rounded-2xl w-1/2' src={require('../App/pics/diagrams/use-case.png')} alt='use-case' />
                    </div>
                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Personas
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>We created two personas for two different users of our system. There is also some background information included to better understand their perspective.</p>

                        <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
                            <figure><img src={require('../App/pics/personas/Slide1.jpg')} alt="old-app" /></figure>
                            <div class="card-body font-light w-fit h-fit">
                                <p className='font-extrabold text-3xl'>Kate McGinley​</p>
                                <p className='quoted font-bold'>“I would benefit from an easier way to express feelings in a diary app”​</p>
                                <p>Kate has had a history of lung diseases. She goes to the hospital every week to have her lungs tested, and has a call with a doctor every 3 days to test her voice. She would have less visits and calls with the NHS.
                                    She also struggles to write or type and wants to be able to use her voice to leave diary’s. Would benefit from seeing a visual summary of her voice diaries.
                                </p>
                            </div>
                        </div>

                        <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
                            <figure><img src={require('../App/pics/personas/Slide2.jpg')} alt="old-app" /></figure>
                            <div class="card-body font-light w-fit h-fit">
                                <p className='font-extrabold text-3xl'>Kyle George Michael</p>
                                <p className='quoted font-bold'>“I was diagnosed with depression and anxiety, told to keep a record of my feelings"​</p>
                                <p>As a young adult, Kyle is now at the age where he is responsible for his own health. He has recently been diagnosed with moderate depression and anxiety, and is on the road to recovery.
                                    His GP recommends that he takes a diary, but he doesn’t have the time or attention span to write long.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; MoSCoW Requirements
                    </h1>
                    <div className="collapse-content">
                        <h2 className="transform transition hover:scale-105 duration-300 ease-in-out bg-clip-text text-transparent bg-gradient-to-bl from-emerald-400 via-yellow-200 to-green-600 text-center text-xl md:text-2xl underline-offset-4 mb-8 underline decoration-pink-600">
                            The User App
                        </h2>
                        <div class="overflow-x-auto my-8">
                            <table class="table w-full table-compact">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="underline-offset-2 underline decoration-pink-600  uppercase font-bold">Must Have</th>
                                        <th className="underline-offset-2 underline decoration-pink-600 uppercase font-bold">Should Have</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Record journal entries of up to 10 minutes</td>
                                        <td>Filter journal entries being displayed (e.g. by date)</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Record journal entries with a predetermined duration (e.g. 30s)</td>
                                        <td>View graphs summarising usage (e.g. minutes journaled per week)</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Give entries a name, description and up to 3 scores (set by SRO)</td>
                                        <td>Opt-in to receive reminders once per week to record an entry</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>View a list of stored journal entries</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>5</th>
                                        <td>Listen to specific journal entries and view/edit associated data</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>6</th>
                                        <td>Request transcription for a journal entry</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>7</th>
                                        <td>View a word cloud for a journal entry if it has been transcribed</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>8</th>
                                        <td>Delete stored journal entries and associated data</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>9</th>
                                        <td>View graphs summarising speaking rate and scores over time</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>10</th>
                                        <td>Interact with these graphs to view word clouds for specific days</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>11</th>
                                        <td>Consent to automatically share self-specified data with their SRO</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>12</th>
                                        <td>Manually share entry data with contacts via WhatsApp</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>13</th>
                                        <td>Change their password</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table class="table w-full table-compact">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="underline-offset-2 underline decoration-pink-600 uppercase font-bold">Could Have</th>
                                        <th className="underline-offset-2 underline decoration-pink-600 uppercase font-bold">Won't Have</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>Reset their password</td>
                                        <td>Receive NLU insights on their transcripts (e.g. emotion recog.)</td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Register themselves (Admins retain 100% control)</td>
                                        <td>Opt-in to receive reminders once per week to record an entry</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>Give entries a name, description and up to 3 scores (set by SRO)</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

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