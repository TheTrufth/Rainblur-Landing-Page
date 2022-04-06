import { ImgComparisonSlider } from '@img-comparison-slider/react'
const Implementation = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Implementation</span>
                </h1>
                <div className='container'>
                    <h2 className='font-bold text-3xl'>Main Technologies</h2>
                    <p>We have chosen <span className="code-pink">ReactJS</span> as our main programming language due to the reasons provided in our research
                        and we used <span className="code-pink">VSCode</span> as our main IDE to develop this project. <span className="code-pink">TailwindCSS</span> was used for custom styling components and pages.
                    </p>

                    <div className="flex w-1/6 justify-center items-center mx-auto gap-x-10">
                        <img className='rounded-xl ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' alt='react' />
                        <img className='rounded-xl' src='https://user-images.githubusercontent.com/674621/71187801-14e60a80-2280-11ea-94c9-e56576f76baf.png' alt='vsc' />
                        <img className='rounded-xl' src='https://seeklogo.com/images/T/tailwind-css-logo-5AD4175897-seeklogo.com.png' alt='tailwind' />
                    </div>

                    <h2 className='font-bold text-3xl'>Packages Used</h2>
                    <p>The following packages were used to help us develop the project.</p>

                    <div class="mx-auto mb-3 w-5/12 shadow-xl md:flex-row">
                        <figure><img src='https://user-images.githubusercontent.com/110953/28352645-7a8a66d8-6c0c-11e7-83af-752609e7e072.png' alt="old-app" /></figure>
                        <div class="card-body font-light w-fit h-fit">
                            <p className='font-extrabold text-3xl'>WorkBox</p>
                            <p className='quoted font-bold'>Creators: Google​</p>
                            <p>The PWA capabilities are made possible by the workbox package which
                                abstracts the manual process of creating <span className='code-pink'>serviceWorkers</span> for offline usage.
                            </p>
                        </div>
                    </div>

                    <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
                        <div class="card-body font-light w-fit h-fit">
                            <p className='font-extrabold text-3xl'>idb-keyval </p>
                            <p className='quoted font-bold'>Creator: @jakearchibald | Link: <a className='underline' href='https://github.com/jakearchibald/idb-keyval'>https://github.com/jakearchibald/idb-keyval</a></p>
                            <p> Used to store app data such as Recordings, Word clouds in the <span className='code-pink'>IndexedDB</span> which is “a low-level API for client-side storage.”
                                This package made it very simple to store these data and saved us a lot of time.
                                e.g.. <span className='code-pink'>set('shareConsent', true)</span>
                            </p>
                        </div>
                    </div>

                    <div class="mx-auto mb-3 card w-8/12 shadow-xl md:flex-row">
                        <div class="card-body font-light w-fit h-fit">
                            <p className='font-extrabold text-3xl'>Axios</p>
                            <p className='quoted font-bold'>Link: <a className='underline' href='https://axios-http.com/'>https://axios-http.com/</a></p>
                            <p>The Axios package is used to make <span className='code-pink'>GET</span>/<span className='code-pink'>POST</span>  requests from the Front-End to the Back-End.
                                e.g. <span className="code-pink">axios.post('nudgeshare.org/api/login', payload, headers).then((res) =&gt; setUsername(res.data['Username'])</span>
                            </p>
                        </div>
                        <figure><img src='https://axios-http.com/assets/logo.svg' alt="old-app" /></figure>
                    </div>

                    <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
                        <figure><img className='bg-clip-content ' src='https://nx.dev/documentation/shared/cypress-logo.png' alt="old-app" /></figure>
                        <div class="card-body font-light w-fit h-fit">
                            <p className='font-extrabold text-3xl'>Cypress - e2e testing tool</p>
                            <p className='quoted font-bold'>Link: <a className='underline' href='https://www.cypress.io/'>https://www.cypress.io/</a></p>
                            <p>We used Cypress as our main tool for end-to-end testing. It's features and built-in html selector tool allowed us to write tests quickly.
                                <span className="code-pink">cy.get('button.login').type('AppUser1')</span>
                            </p>
                        </div>
                    </div>
                    <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
                        <div class="card-body font-light w-fit h-fit">
                            <p className='font-extrabold text-3xl'>daisyUI - prebuilt TailwindCSS components</p>
                            <p className='quoted font-bold'>Link: <a className='underline' href='https://daisyui.com/'>https://daisyui.com/</a></p>
                            <p>We used daisyUI for some of the components such as the countdown for when you start a Recording. It also added smooth transititons for each component making the user experience feel smooth and responsive.
                            </p>
                        </div>
                        <figure><img src='https://raw.githubusercontent.com/saadeghi/files/main/daisyui/logo-4.svg' alt="old-app" /></figure>
                    </div>


                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation: Making Recordings
                    </h1>

                    <div className="collapse-content">

                        <p className='my-2'>
                            When recording audio, the custom hook <span className="code-pink">useRecorder</span> is used.
                            It controls the state of the recorder which is outlined below.
                            This code was adapted from <a href="https://github.com/jleonardo007/voice-recorder-example/" target={'_blank'} rel="noreferrer" className="underline">here</a>, modified to our usage for saving the <span className="code-pink">Blob</span> object.
                        </p>
                        <div class="mx-auto my-2 mb-3 card w-full shadow-xl">
                            <figure><img className='rounded-2xl w-4/12' src={require('../App/pics/implementation/make-recording/recorderState.png')} alt="system-diagram" /></figure>
                        </div>
                        <table className='table table-compact'>
                            <thead>
                                <tr>
                                    <td>Property</td>
                                    <td>Usage</td>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td className="code-pink">recordingMinutes, recordingSeconds</td>
                                    <td>These properties are the elapsed time in minutes+seconds of the recording.</td>
                                </tr>
                                <tr>
                                    <td className="code-pink">initRecording</td>
                                    <td><span className="code-pink">True</span> if currently recording else <span className="code-pink">False</span>.</td>
                                </tr>
                                <tr>
                                    <td className="code-pink">mediaStream</td>
                                    <td className='flex flex-col'>
                                        <p>As per documentation: It prompts the user for permission to use a microphone which produces a <span className="code-pink">MediaStream</span>
                                        </p>
                                        <p>with tracks containing <span className="code-pink">mp3</span>.</p>
                                        <p>See: https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="code-pink">mediaRecorder</td>
                                    <td className='flex flex-col'>
                                        <p>As per documentation: It takes in a  <span className="code-pink">MediaStream</span> object
                                        </p>
                                        <p>which creates a recorder object that can call methods like <span className="code-pink">.startRecording()</span>.</p>
                                        <p>See: https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder</p>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        <div class="mx-auto mb-3 card shadow-xl md:flex-row">
                            <figure><img className='rounded-2xl w-12/12' src={require('../App/pics/implementation/make-recording/useRecorder2.png')} alt="system-diagram" /></figure>
                            <div class="card-body font-light w-5/12">
                                <p>The hook returns the <span className="code-pink">recorderState</span> (explained above) and the functions <span className="code-pink">startRecording()</span>, <span className="code-pink">cancelRecording()</span>, <span className="code-pink">saveRecording()</span>  which are used in the add recording Page (shown below).</p>
                            </div>
                        </div>
                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='rounded-2xl w-2/3' src={require('../App/pics/implementation/make-recording/addRecording1.png')} alt="system-diagram" /></figure>
                            <figure><img className='rounded-2xl w-2/3' src={require('../App/pics/implementation/make-recording/previewRec2.png')} alt="system-diagram" /></figure>
                            <figcaption>Once the user has finished their recording and has clicked the stop button (or the set timer has run out),  <span className="code-pink">previewRecording()</span> is called.
                                This function sets the recording data to with the following properties listed below. It then saves the recording temporarily for the user to playback the audio.
                                If the user wishes to delete the recording, the recording will also be deleted from the device.
                            </figcaption>
                            <figure><img className='rounded-2xl w-2/3' src={require('../App/pics/implementation/make-recording/preview3.png')} alt="system-diagram" /></figure>
                            <figcaption>
                                <span className="code-pink">previewRecording()</span> also allows the user see the inputs for <span className="code-pink">scores</span> and <span className="code-pink">recordingTitle</span>.
                                Once they have submitted those information and clicked the save button, <span className="code-pink">saveFully()</span> is called saving the recording with the updated scores and recording titles on the users device.</figcaption>
                        </div>
                        <div class="mx-auto mb-3 card w-full shadow-xl flex flex-row">
                            <figure><img className='rounded-2xl w-1/2' src={require('../App/pics/new-app/new-app-6.png')} alt="system-diagram" /></figure>
                            <figure><img className='rounded-2xl w-full scale-150' src={require('../App/pics/implementation/make-recording/saveFully.png')} alt="system-diagram" /></figure>
                        </div>


                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation: Saving Recordings
                    </h1>

                    <div className="collapse-content">

                        <p className='my-2'>
                            Another custom hook called <span className="code-pink">useRecordingsList()</span> is used when saving the recordings on device.
                            Each time we make a recording, as explained in the previous section the, the <span className="code-pink">useRecorder()</span> hook stores a <span className="code-pink">audio</span> URL
                            and a <span className="code-pink">Blob</span> object. As shown below, once we have set these values, the <span className="code-pink">useEffect()</span> triggers the <span className="code-pink">idb-keyval</span> function <span className="code-pink">set('Recordings')</span> to store the recordings list containing all the recordings onto the local
                            indexedDB. In additon, each recording stores a unique <span className="code-pink">key</span> is generated and stored to uniquely identify each recording.
                        </p>
                        <div class="mx-auto my-2 mb-3 card w-full shadow-xl">
                            <figure><img className='rounded-2xl w-full max-w-3xl' src={require('../App/pics/implementation/make-recording/saveRec.png')} alt="system-diagram" /></figure>
                        </div>

                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='rounded-2xl w-full' src={require('../App/pics/implementation/make-recording/saveExports.png')} alt="system-diagram" /></figure>
                            <figcaption>The hook also returns the following functions that are used to update the recording details such as the scores in the indexedDB.
                            </figcaption>
                        </div>


                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation: Sharing recording
                    </h1>

                    <div className="collapse-content">

                        <p className='my-2'>
                            One of the most important features of NudgeShare is the option for users to share recordings and personal scores with their SRO. This is done by sending recordings and accompanying data via POST requests to the legacy backend that we have been working with, where the Flask application will use the IBM Watson Speech-to-Text SDK to perform an analysis of the user’s recording. This is then shared with the user’s SRO and can provide great insight into the wellbeing and health status of a user.
                        </p>
                        <div class="mx-auto my-2 mb-3 card w-full shadow-xl">
                            <div class="mockup-code h-fit max-w-3xl m-auto">
                                <pre><code>
                                    {`
        export default async function checkRecordings(updateRecordingAnalysis) {
            var recordings = await get("Recordings").then(val => { return val; })
            const shareConsent = await get("shareConsent").then(val => { return val; })
            if (recordings) {
                for (let index = 0; index < recordings.length; index++) {
                    var recording = recordings[index]
                    // onty send a recording that has not yet been sent but should be, and share agreement is confirmed by user
                    if (shareConsent && recording['recordingData']['shareType'] && recording['recordingData']['analysisStatus'] === "pending") {
                        const response = await sendRequest(recording)
                        if (response) {
                            recording['recordingData']['analysisStatus'] = "pendingResult"
                            updateRecordingAnalysis('pendingResult', {}, recording['key'])
                        }
                    }
                    // request the result of analysis if a recording if it has already been sent and result not yet received
                    else if (recording['recordingData']['shareType'] && recording['recordingData']['analysisStatus'] === "pendingResult") {
                        var response = await pendAnalysis({ 'dateRecorded': recording['recordingData']['dateRecorded'] })
                        if (response) {
                            updateRecordingAnalysis('complete', response, recording['key'])
                        }
                    }

                }
            }
        }
`}
                                </code></pre>
                            </div>
                        </div>
                        <p className="my-2">
                            We decided to create a background task in the application that would process new recordings and send them to the backend if needed. This is only done when the user has agreed to the Share Agreement and has selected the option for a recording to be shared. The background task runs every 5 seconds. We thought this to be a suitable interval as to not hinder app performance, but also to not burden the backend server with requests. The task can be found in the src/components/Recordings/hooks/shareRecordings.js file, where the checkRecordings() function is the task being run every 5 seconds from src/App/App.jsx. To minimise load to the user’s device, the task is only run when the device has a network connection, and the user is logged in.
                        </p>
                        <div class="mx-auto my-2 mb-3 card w-full shadow-xl">
                            <div class="mockup-code h-fit ">
                                <pre><code>
                                    {`
    const interval = setInterval(() => {
        window.navigator.onLine &&
          checkRecordings(RecordingContext.updateRecordingAnalysis)
      }, 5000);
    return () => clearInterval(interval);
`}
                                </code></pre>
                            </div>
                        </div>
                        <p className="my-2">
                            The function will go through all recordings that are stored on the user’s device and perform analysis on those that have not yet been sent to the backend but should be (i.e. newly made recordings) and also query the backend for results of analyses that have been requested, but not yet received. In each case, the recording will be updated in the local IDB-Keyval database if the response from the backend requires so.

                            There are accompanying functions that are used to handle requests to the backend using Axios, namely sendRequest() which will send a recording along with its data to the backend to be processed by IBM Watson, and pendAnalysis() which will query the backend for the results of an analysis. They make use of helper functions in the src/routes_analysis.js to communicate with the backend.

                            This approach ensures that NudgeShare maintains the option for the application to be used without a network connection, while ensuring that analysis is always completed once the application is taken online again.
                        </p>


                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation: User authentication
                    </h1>

                    <div className="collapse-content">

                        <p className='my-2'>
                            User login and authentication is an important part of the application. NudgeShare uses JWT tokens to authenticate its users. Once a user enters their email and password on the login page, these details will be sent as an HTTP Post request to the legacy backend Flask app. The Flask app will check the MySQL database to see if the email and password match. If it does not match, it will send an error back to the ReactApp which will prompt the user to either try again or reset their password. If the login is successful, the client will be sent a JWT web token, and a refresh token. These tokens include encrypted data that can be used to verify a user session. They are stored on the IDB Keyval database.
                        </p>

                        <p className="my-2">
                            The JWT token is sent as an HTTP post request every time the user re-loads Nudge Share or tries to perform a key action such as uploading a recording. If the JWT token is invalid, it will immediately log the user out. If the JWT token has expired, it will use the refresh token to reissue a new token. Lastly, the user can update their password from within the app. The user is prompted to enter their old and new password which will be sent across to the flask app along with the current JWT token. If it is approved, the password will be updated on the backend database.
                        </p>
                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation: Viewing Graphs
                    </h1>

                    <div className="collapse-content">

                        <p className='my-2'>
                            Another key feature of NudgeShare is the analysis of recordings and the visualisation of the user’s scores and usage statistics. For this, we used the Recharts third-party React library to create a bar chart to display the user’s last three month’s usage statistics, and a series of scatter charts to show their historical scores data by month.
                        </p>
                        <p className='my-2'>
                            To create the data needed for these charts, NudgeShare interprets the local IDB-Keyval database and creates lists of data according to the Recharts API documentation [1]. The functions that do this are getScore(), which is responsible for creating data for a specific score name in the database as these are custom and set by the user’s SRO, getWPM() which is used to interpret words-per-minute values from the database as these are dependent on whether a user has shared a recording for analysis, and getUsageDate() which creates data for the last three months of user activity and usage such as the number of recordings created and the total length of all recordings in minutes. These can all be found in src/components/Analysis/hooks/getScores.js.
                        </p>
                        <p classname='my-2'>
                            The data generated by getUsageDate() is a dictionary in the following format:
                        </p>
                        <div class="mockup-code h-fit max-w-xl m-auto">
                            <pre><code>
                                {`
        {
            Apr: {
                name: "Apr",
                No. minutes: "3",
                No. recordings: "6",
            },

            Mar: {
                name: "Apr",
                No.minutes: "6",
                No.recordings: "10",
            }
        }
`}
                            </code></pre>
                        </div>
                        <p className="my-2">
                            The last three months are represented as the key names in the dictionary, where each has the total number of recordings and minutes for that month.
                        </p>
                        <p className="my-2">
                            The data generated by the getScore() and getWPM() is in the following format:
                        </p>
                        <div class="mockup-code h-fit max-w-xl m-auto">
                            <pre><code>
                                {`
        {
            Apr: [ 
                { x: 5, y: 1000 }, 
                { x: 10, y: 1300 }, 
            ], 
            Mar: [ 
                { x: 21, y: 900 }, 
                { x: 28, y: 700 }, 
            ] 
        } 
`}
                            </code></pre>
                        </div>

                        <p className="my-2">
                            Where every month’s worth of data that is available will have a key, whose data is a list of dictionaries containing x and y values for the scatter graphs created by Recharts. The x values here are the day of the month, and the y value will be the value of the score that the user entered for a recording on that day. The Scores page of analysis allows the user to select which month’s data they would like to view, and this is done through a drop-down menu which is populated with the key names in this dictionary.
                        </p>
                        <div class="mx-auto mb-3 card w-full shadow-xl flex flex-row">
                            <figure><img className='rounded-2xl w-8/12' src={require('../App/pics/implementation/analysis/ana3.jpeg')}
                                alt="system-diagram" /></figure>
                            <figure><img className='rounded-2xl w-10/12' src={require('../App/pics/implementation/analysis/ana4.jpeg')} alt="system-diagram" /></figure>
                        </div>
                        <p className='my-2'>
                            [1] “Recharts API documentation,” Recharts. [Online]. Available: https://recharts.org/?p=%2Fen-US%2Fapi. [Accessed: 01-Apr-2022].
                        </p>


                    </div>

                </div>



                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Implementation Showcase
                    </h1>

                    <div className="collapse-content">
                        <div className="flex flex-row gap-x-8 flex-wrap gap-y-8">
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-1.png')} />
                                <img alt='' className='w-56' slot='first' src={require('../App/pics/xemo/login.jpeg')} />
                            </ImgComparisonSlider>

                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-3.png')} />
                                <img alt='' className='h-[25rem] w-56' slot='first' src={require('../App/pics/xemo/records1.jpeg')} />
                            </ImgComparisonSlider>

                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-4.png')} />
                                <img alt='' className='h-[30rem] w-56' slot='first' src={require('../App/pics/xemo/records2.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-5.png')} />
                                <img alt='' className='h-[30rem] w-56' slot='first' src={require('../App/pics/xemo/records3.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-7.png')} />
                                <img alt='' className='h-[30rem] w-56' slot='first' src={require('../App/pics/xemo/records4.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-8.png')} />
                                <img alt='' className='h-[30rem] w-56' slot='first' src={require('../App/pics/xemo/records5.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-9.png')} />
                                <img alt='' className='h-[30rem] w-56' slot='first' src={require('../App/pics/xemo/share4.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-11.png')} />
                                <img alt='' className='h-[27rem] w-56' slot='first' src={require('../App/pics/xemo/view.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-12.png')} />
                                <img alt='' className='h-[27rem] w-56' slot='first' src={require('../App/pics/xemo/share1.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-13.png')} />
                                <img alt='' className='h-[25rem] w-56' slot='first' src={require('../App/pics/xemo/share2.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-15.png')} />
                                <img alt='' className='h-[25rem] w-56' slot='first' src={require('../App/pics/xemo/view-ana1.jpeg')} />
                            </ImgComparisonSlider>
                            <ImgComparisonSlider className='w-fit'>
                                <img alt='' className='w-56' slot='second' src={require('../App/pics/old-app/old-app-16.png')} />
                                <img alt='' className='h-[25rem] w-56' slot='first' src={require('../App/pics/xemo/view-ana2.jpeg')} />
                            </ImgComparisonSlider>
                        </div>

                    </div>


                </div>



            </div>


        </>
    )
}

export default Implementation