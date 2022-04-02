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
                                        <td>30%</td>
                                        <td>0%</td>
                                        <td>70%</td>
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
                                        <td>25%</td>
                                        <td>25%</td>
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


            </div>


        </>
    )
}

export default Evaluation