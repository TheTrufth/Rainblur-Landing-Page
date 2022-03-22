const Design = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">System Design</span>
                </h1>
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Data Storage
                    </h1>


                    <div className="collapse-content">
                        <p className='my-2'>
                            NudgeShare stores the following data in the React App for a mix of online and offline purposes.
                        </p>
                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Data stored in IndexedDB</h2>
                        <p className='my-2'>
                            Here is a list of the key, value pairs stored in IndexedDB
                        </p>
                        <div class="overflow-x-auto">
                            <table class="table w-full table-compact">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Key</th>
                                        <th>Value</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>Recordings</td>
                                        <td className="text-secondary font-mono">Array[Recordings]</td>
                                        <td>
                                            This object stores an array of recording objects.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>accessToken</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>Stores the accessToken used for authentication</td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>refreshToken</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>Stores the refreshToken used for authentication</td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>user_details</td>
                                        <td className="text-secondary font-mono">Object</td>
                                        <td>Stores users full name and SRO name. For offline usage.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Data stored in each Recording object</h2>
                        <p className='my-2'>
                            Here is the key, value pairs of the Recording object
                        </p>
                        <div class="overflow-x-auto my-8">
                            <table class="table w-full table-compact">

                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Key</th>
                                        <th>DataType</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>1</th>
                                        <td>audio</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>Stores the URL link to the recording
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>Blob</td>
                                        <td className="text-secondary font-mono">Blob</td>
                                        <td>A blob object which stores the MP3 file
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>key</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>A Unique string to distinguish each recording.
                                            Used for deleting/editing recording
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>recordingData</td>
                                        <td className="text-secondary font-mono">Object</td>
                                        <td>This object stores an array of data associated with a recording
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.1</th>
                                        <td>recordingData.analysisStatus</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The status of the analysis i.e. "pending"/"completed"
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.2</th>
                                        <td>recordingData.dateRecorded</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The date & time the recording was made.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.3</th>
                                        <td>recordingData.displayDate</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>Just the date the recording was made
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.4</th>
                                        <td>recordingData.duration</td>
                                        <td className="text-secondary font-mono">Number</td>
                                        <td>The duration of recording in seconds.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.5</th>
                                        <td>recordingData.refNumber</td>
                                        <td className="text-secondary font-mono">Number</td>
                                        <td>
                                            ""
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score1_name</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The name of score1 set by the SRO e.g. Steps
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score1_value</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The value of score1 set by the user that made the recording.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score2_name</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The name of score2 set by the SRO e.g. Steps
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score2_value</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The value of score2 set by the user that made the recording.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score3_name</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The name of score3 set by the SRO e.g. Steps
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.6</th>
                                        <td>recordingData.score3_value</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>The value of score2 set by the user that made the recording.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.7</th>
                                        <td>recordingData.shareType</td>
                                        <td className="text-secondary font-mono">Boolean</td>
                                        <td>If the user has agreed to share the recording
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4.8</th>
                                        <td>recordingData.type</td>
                                        <td className="text-secondary font-mono">String</td>
                                        <td>Whether it is a Text recording or a Numeric recording.
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; System Architecture
                    </h1>

                    <div className="collapse-content">
                        <div class="mx-auto mb-3 card w-full bg-base-100 shadow-xl md:flex-row">
                            <figure><img src={require('../App/pics/diagrams/system-diagram.png')} alt="system-diagram" /></figure>
                        </div>
                        <p className='my-2'>
                            NudgeShare uses the <b>same</b> backend API as MobileV, at the clients request.
                            An advantage of this was that the backend was tested throughly so no changes had to be made.
                            Both the front-end and back-end are deployed on Ubuntu version 21.10.
                            The backend routes start with <span className='text-secondary font-mono'>/api</span>.
                            The backend is also in a virtual enviornment to isolate it from the front-end ensuring optimal performance.
                        </p>
                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Front-end</h2>
                        <p className='my-2'>
                            It has a new front-end written in <span className='text-secondary font-mono'>React</span>.
                            It stores front-end data in <span className='text-secondary font-mono'>IndexedDB</span> which is used for storing structured data such as <span className='text-secondary font-mono'>.mp3</span> recordings, <span className='text-secondary font-mono'>base64</span> wordclouds and authentication data.
                            <a href='https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API' class="link mx-1 text-secondary font-mono">IndexedDB[1]</a> was vital and core to the app as it was used for persisting data inbetween each user session.
                        </p>
                        <h2 className='text-2xl underline underline-offset-2 text-primary'>Back-end</h2>
                        <p className='my-2'>
                            The backend is written in <span className='text-secondary font-mono'>Flask</span> and uses the reverse proxy <span className='text-secondary font-mono'>WSGI</span> server  <span className='text-secondary font-mono'>gunicorn</span> to
                            host the backend on the <span className='text-secondary font-mono'>nginx</span> web server.
                        </p>
                        <p className='my-2'>
                            <span className='text-secondary font-mono'>IBM STT SDK</span> was used communicate with the IBM watson speech-to-text API used to transcribe audio and get the wordcloud of the recordings.

                        </p>
                    </div>

                </div>
                <div className='divider' />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Site Map
                    </h1>

                    <div className="collapse-content">
                        <div class="mx-auto mb-3 card w-full bg-base-100 shadow-xl md:flex-row">
                            <figure><img src={require('../App/pics/diagrams/site-map.png')} alt="system-diagram" /></figure>
                        </div>
                        <p className='my-2'>
                            When creating our application, we seperated each feature into categories which are the <span className='text-lime-400'>green boxes that simulate
                                the routes used to navigate around the app.</span> This was made simple as possible so all types of users
                            from different backgrounds would be able to intuitively navigate through the app.
                            Each route have their own pages.
                            <span className='text-green-500'>The dark green boxes convey what features are available in those pages</span>
                        </p>
                    </div>

                </div>

            </div>


        </>
    )
}

export default Design