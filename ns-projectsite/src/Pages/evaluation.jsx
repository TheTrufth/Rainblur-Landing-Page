const Evaluation = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Evaluation</span>
                </h1>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box collapse-plus">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Achievements
                    </h1>

                    <div className="collapse-content">

                        <div className="overflow-x-auto mx-auto">
                            <table className='table mx-auto table-compact table-zebra'>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Requirement</td>
                                        <td>Priority</td>
                                        <td>State</td>
                                        <td>Contributors</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Record journal entries of up to 10 minutes</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Record journal entries with a predetermined duration (e.g. 30s)</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Give entries a name, description and up to 3 scores (set by SRO)</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>View a list of stored journal entries</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>Listen to specific journal entries and view/edit associated data</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>Request transcription for a journal entry</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh, Nick</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>View a word cloud for a journal entry if it has been transcribed</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh, Nick</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>Delete stored journal entries and associated data</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>View graphs summarising speaking rate and scores over time</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Nick</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>Consent to automatically share self-specified data with their SRO</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Dinesh</td>
                                    </tr>
                                    <tr>
                                        <td>11</td>
                                        <td>Change their password</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Jay</td>
                                    </tr>
                                    <tr>
                                        <td>12</td>
                                        <td>Be able to successfully authenticate with back-end</td>
                                        <td>Must</td>
                                        <td>☑️</td>
                                        <td>Jay</td>
                                    </tr>
                                    <tr>
                                        <td>13</td>
                                        <td>View graphs summarising usage (e.g. minutes journaled per week)</td>
                                        <td>Should</td>
                                        <td>☑️</td>
                                        <td>Nick</td>
                                    </tr>

                                    <tr>
                                        <td></td>
                                        <td className="font-bold text-base">Key Functionalities (must have and should have)</td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-green-400">100% Completed</td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td className="font-bold text-base">Optional Functionalities (could have)</td>
                                        <td></td>
                                        <td></td>
                                        <td className="text-green-400">50% Completed</td>
                                    </tr>


                                </tbody>
                            </table>

                        </div>



                    </div>


                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box collapse-plus">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Known Bug list
                    </h1>

                    <div className="collapse-content">

                        <div className="overflow-x-auto mx-auto">
                            <table className='table mx-auto table-compact table-zebra'>
                                <thead>
                                    <tr>
                                        <td>ID</td>
                                        <td>Bug description</td>
                                        <td>Priority</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Bug descripion 1</td>
                                        <td>High/Medium/Low</td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>



                    </div>


                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box collapse-plus">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Individual Contribution Distribution Table
                    </h1>

                    <div className="collapse-content">

                        <div className="overflow-x-auto mx-auto">
                            <table className='table mx-auto table-compact table-zebra'>
                                <thead>
                                    <tr>
                                        <td>Work packages</td>
                                        <td>Dinesh Anantharaja</td>
                                        <td>Jay McCaughrean</td>
                                        <td>Nick Daskovolic</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Project Partners liaison</td>
                                        <td>40%</td>
                                        <td>30%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>Requirement Analysis</td>
                                        <td>33%</td>
                                        <td>33%</td>
                                        <td>33%</td>
                                    </tr>
                                    <tr>
                                        <td>Research and Experiments</td>
                                        <td>30%</td>
                                        <td>30%</td>
                                        <td>40%</td>
                                    </tr>
                                    <tr>
                                        <td>UI design</td>
                                        <td>33%</td>
                                        <td>33%</td>
                                        <td>33%</td>
                                    </tr>
                                    <tr>
                                        <td>Coding</td>
                                        <td>55%</td>
                                        <td>17.5%</td>
                                        <td>27.5%</td>
                                    </tr>
                                    <tr>
                                        <td>Testing</td>
                                        <td>10%</td>
                                        <td>0%</td>
                                        <td>90%</td>
                                    </tr>
                                    <tr>
                                        <td>Report Website</td>
                                        <td>40%</td>
                                        <td>30%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>Video Editing</td>
                                        <td>0%</td>
                                        <td>100%</td>
                                        <td>0%</td>
                                    </tr>
                                    <tr>
                                        <td>Overall contribution</td>
                                        <td>50%</td>
                                        <td>20%</td>
                                        <td>30%</td>
                                    </tr>
                                    <tr>
                                        <td>Main roles</td>
                                        <td>Coder, Designer, Tester</td>
                                        <td>Video Editor, Presentation Maker</td>
                                        <td>Coder, Tester</td>
                                    </tr>




                                </tbody>
                            </table>

                        </div>



                    </div>


                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box collapse-plus">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Critical Evaluation
                    </h1>

                    <div className="collapse-content">
                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Critical Evaluation of the Project</h2>
                        <p>We conducted an honest evaluation of the finished product and the work we put into it. The evaluation is divided into 5 segments: functionality, UI and UX, compatibility, maintainability, and project management.</p>

                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Functionality</h2>
                        <p>We successfully transferred all existing functionality from MobileV1 to Nudge Share. Nudge Share connects seamlessly with the existing backend API endpoints of MobileV1 to complete speech analysis with IMB Watson. Indeed, 100% of “Must Have’s” from our list of requirements has been achieved. We also completed 50% of optional requirements such as the ability to change passwords. All functionality has been tested and is confirmed to be working.</p>
                        <p>Score: 10/10</p>

                        <h2 className='text-2xl underline underline-offset-2 text-primary'>UI and UX</h2>
                        <p>We made use of a CSS framework called Tailwind which allowed us to develop a responsive and dynamic UI efficiently. We also used CSS libraries to add modern icons to make the app coherent and comprehensive. We took inspiration from Google’s material design guild lines to create a native UI and UX feel for users. However, there is still room for improvement in UI and UX. For a new user, some parts of the app may not feel as intuitive as it does to us. Therefore, further user testing is needed to make continuous improvements to the design.</p>
                        <p>Score: 8/10</p>

                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Compatibility</h2>
                        <p>Compatibility was one of the core themes for this project. MobileV1 was only available as an Android app, whereas Nudge Share is available on mobile and desktop. Components of the app not only scale according to screen size but rearrange themselves. For example, the navigation bar is stacked on the left side of the screen on a wide window but moves to the bottom of the screen for a narrow window such as on mobile. Also, since Nudge Share is written using React, it can easily be deployed on all major App stores as a PWA.</p>
                        <p>Score: 10/10</p>

                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Maintainability</h2>
                        <p>The code for Nudge Share is well documented with comments and the project maintains a coherent file structure. We adopted a modular design by splitting and re-using components and hooks in React. This makes it easier to add new components to the app without breaking existing functionality. Maintainability could be improved by including a more in-depth “read me” file for new developers. </p>
                        <p>Score: 8/10</p>

                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Project Management</h2>
                        <p>We initially struggled with project management. Each member of the team came into the project with different levels of experience, and it was difficult to coordinate efforts to complete tasks in the remote work environment. Things improved as we started implementing more detailed weekly plans for each member and worked together more often on Microsoft Teams. Although contribution varied, each member played an important role in delivering the final project.</p>
                        <p>Score: 5/10</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Evaluation