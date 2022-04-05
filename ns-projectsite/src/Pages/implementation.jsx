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

                    <div class="mx-auto mb-3 card w-11/12 shadow-xl md:flex-row">
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
                            This code was adapted from here, modified to our usage for saving the <span className="code-pink">Blob</span> object.
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
                            <figure><img className='rounded-2xl w-full' src={require('../App/pics/implementation/make-recording/saveFully.png')} alt="system-diagram" /></figure>
                        </div>


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