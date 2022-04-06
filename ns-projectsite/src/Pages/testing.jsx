const Testing = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Testing</span>
                </h1>
                <div className="container">
                    <h1 className='text-2xl md:text-3xl'>Testing Strategy</h1>
                    <p className='my-1'>We used a combination of integration, user, compatibility, performance and responsive design testing to rigorously test our product’s code base and real-world usability. </p>
                </div>
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Integration testing 🧪
                    </h1>


                    <div className="collapse-content">
                        <div class="mx-auto mb-3 card w-5/12 bg-base-100 shadow-xl">
                            <figure><img src={require('../App/pics/testing/unit-integration-tests.png')} alt="code-coverage" /></figure>
                        </div>
                        <p className='my-2'>
                            We used the <span className="code-pink">Cypress</span> JavaScript library to create automated integration testing of NudgeShare. This included the testing of separate parts of the app such as login, password changes, creating recordings and sharing recordings as well as integration testing of all functionalities together in different flows. We used <span className="code-pink">Istanbul[1]</span>, a JavaScript code coverage tool, to instrument our code and complete code coverage of our Cypress tests in which we achieved <span className="code-pink">90.26%</span> coverage of the code base.
                            The main goal of this testing was to rigorously test the React app and its rendering of components correctly in an automated fashion. The code passed all test and had excellent code coverage too. This is a good indicator to the performance of the application as Cypress performs all test using a simulated broswer.
                        </p>
                        <span className="my-2">[1] K. Anantheswaran, “gotwarlost/istanbul,” GitHub, Apr. 03, 2022. <a className='underline' href='https://github.com/gotwarlost/istanbul' target={'_blank'} rel='noreferrer'>https://github.com/gotwarlost/istanbul</a></span>
                        <div class="mx-auto mb-3 card w-8/12 bg-base-100 shadow-xl">
                            <figure><img src={require('../App/pics/testing/code-coverage.png')} alt="code-coverage" /></figure>
                        </div>
                    </div>
                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Responsive Design Test
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>
                            One of the main goals of this project was to create a responsive product for all devices. We tested the functionality and responsiveness of the deployed application on a range of devices ourselves to ensure that all elements are visible and/or accessible.
                        </p>
                        <p className="my-2">From our manual testing, the app performs correctly on all platforms, with no difference in functionality and accessibility between devices and screen sizes. Smaller devices do require scrolling to access certain elements, and this is always achievable by swiping on mobile devices.
                        </p>


                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Compatibility testing
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>
                            We tested our application on a range of popular browsers and mobile devices to see its range of compatibility.  The key functionalities of the application were tested on each platform to ensure that they work as intended. Combined with our responsive design testing, it is clear that the application is fit for purpose as a cross-platform service.
                        </p>

                        <div class="overflow-x-auto my-8">
                            <table class="table w-full table-compact">

                                <thead>
                                    <tr>
                                        <th>Browser</th>
                                        <th>Make a recording (microphone access)</th>
                                        <th>Playback Recordings</th>
                                        <th>View Analysis</th>
                                        <th>Use app when offline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Google Chrome</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success' >Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>macOS Safari</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>iOS Safari</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Mozilla Firefox</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Microsoft Edge</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>iOS (add to homescreen)</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                    </tr>
                                    <tr>
                                        <th>Andriod (installed as an app)</th>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
                                        <td className='text-success'>Yes</td>
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
                        &gt; User Testing 👤
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>
                            We also performed testing with a group of real users (classmates and colleagues) who we asked to provide feedback on their experience. They were asked to perform a flow of tasks in the app which we created with the aim of testing all functionality of the app. There were two groups of two users, one group testing the app on a mobile device, and the other group testing it in a desktop environment.
                        </p><p className='underline my-2'>
                            The flow for the mobile app users was:
                        </p>
                        <ol type='1' className='mx-auto inline-block'>
                            <li className='font-bold text-info'>1. Install the app from the device browser </li>
                            <li className='font-bold text-info'>2. Login with given credentials </li>
                            <li className='font-bold text-info'>3. Disconnect the device from the internet so that the app is offline </li>
                            <li className='font-bold text-info'>4. Create a recording of their chosen length </li>
                            <li className='font-bold text-info'>5. View the associated scores </li>
                            <li className='font-bold text-info'>6. Reconnect the device to the internet </li>
                            <li className='font-bold text-info'>7. Share the recording they made for analysis </li>
                            <li className='font-bold text-info'>8. View the results of the analysis once it is done </li>
                        </ol>
                        <p className='underline my-2'>
                            The flow for the mobile app users was:
                        </p>
                        <ol type='1' className='mx-auto inline-block'>
                            <li className='text-info font-bold font'>1. Login with given credentials </li>
                            <li className='text-info font-bold font'>2. Create a recording of their chosen length </li>
                            <li className='text-info font-bold font'>3. View the associated scores </li>
                            <li className='text-info font-bold font'>4. Share the recording they made for analysis </li>
                            <li className='text-info font-bold font'>5. View the results of the analysis once it is done                         </li>

                        </ol>
                        <p className='my-2'>
                            We decided to use the group of mobile device users to test the offline functionality of the app as we feel that this will be the most common real-world scenario where a user does not have access to the internet.
                        </p>
                        <h1 className='text-2xl md:text-3xl'>Mobile Testing Feedback 📱</h1>
                        <div class="overflow-x-auto my-8">
                            <table class="table mx-auto table-compact">

                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Feedback from users</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Installing the app from the browser</th>
                                        <td className='text-success flex flex-col'>
                                            <span>Easy to install via ‘Add to home screen’ option on iOS.</span>
                                            <span>Easily accessible from the device browser on an android device</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Creating a recording </th>
                                        <td>
                                            It would be nice to have the option to have a custom length recording
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Viewing scores </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>Charts are instantly available which is convenient </span>
                                            <span className='text-error'>The score charts do not have labels on the data points </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Completing Analysis  </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>The analysis icon is useful as it is easy to know when the analysis is done and whether it has started correctly  </span>
                                            <span className='text-error'>It is not immediately obvious that the user must agree to the share agreement before sharing recordings as there</span>
                                            <span className='text-error'> is no prompt or pop up to do so, it required extra digging through the app’s content to discover this. </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Viewing analysis results   </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>The word cloud is clear and easy to read  </span>
                                            <span className='text-error'>When the transcript is long, it becomes obtrusive to the analysis results, especially on smaller mobile devices where it is necessary to scroll to view the word cloud. </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Offline functionality    </th>
                                        <td className='flex flex-col text-success'>
                                            <span >The message that pops up once going offline is informative and nice to see   </span>
                                            <span>The recording automatically started analysis once the app was back online without additional user input which is very convenient  </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        <h1 className='text-2xl md:text-3xl'>Desktop Testing Feedback 🖥</h1>
                        <div class="overflow-x-auto my-8">
                            <table class="table mx-auto table-compact">

                                <thead>
                                    <tr>
                                        <th>Aspect</th>
                                        <th>Feedback from users</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <th>Accessing the app and logging in  </th>
                                        <td>
                                            All users had no issues or feedback with the login process
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Creating a recording   </th>
                                        <td>
                                            The process is straightforward, but it would be nice to have flexible time limits for recordings
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Viewing scores </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>All charts were easy to view on a laptop screen. </span>

                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Completing Analysis  </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>Analysis was completed fairly quickly and ready for viewing immediately which is great   </span>
                                            <span className='text-error'>It was not clear that the share agreement has to be completed before sharing a recording.</span>
                                            <span className='text-error'>  A prompt or message to indicate this would be more user friendly </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Viewing analysis results   </th>
                                        <td className='flex flex-col'>
                                            <span className='text-success'>The word cloud is clear and easy to read  </span>
                                            <span className='text-error'>When the transcript is long, it becomes obtrusive to the analysis results, especially on smaller mobile devices where it is necessary to scroll to view the word cloud. </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th> Offline functionality    </th>
                                        <td className='flex flex-col text-success'>
                                            <span >The message that pops up once going offline is informative and nice to see   </span>
                                            <span>The recording automatically started analysis once the app was back online without additional user input which is very convenient  </span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                        </div>
                        <p>
                            Overall, the feedback we received was positive, however, it did outline certain issues with the app and its user experience. For example, it was not clear to all of the users that the share agreement must be completed before analysis can be performed, which is a potential future improvement that can be made in the form of a prompt or message to the user.
                            Out take from the user testing was positive overall, and we were happy that the users found the application more than usable in a real world scenario with no major bugs.
                        </p>

                    </div>

                </div>
                <div className='divider' />
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Performance testing
                    </h1>


                    <div className="collapse-content">
                        <p className='my-2'>
                            The main performance feature of the application is the analysis of recordings which includes generating a word cloud and transcription from the legacy back-end code which uses the IBM Watson API. To test this, we measured how long it took for the application to mark the analysis of different length recordings as completed, from the moment the recording is shared. The recordings were taken as snippets of recorded conversation and were different for every single test. These were the results of our testing:

                        </p>
                        <div class="mx-auto mb-3 card w-8/12 bg-base-100 shadow-xl">
                            <figure><img src={require('../App/pics/testing/analysis-performance.png')} alt="analysis-perfomance" /></figure>
                        </div>
                        <p className='my-2'>
                            The total average of the time taken to get the analysis compared to the length of the original recording is 65%, which we feel is acceptable for users who decide to share recordings regularly. We are limited by the speed of the IBM Watson API, which is not the fastest of speech to text services [2], but it is clear that our application is not a bottleneck in this situation.
                        </p>
                        [2] B. Xu, C. Tao, Z. Feng, Y. Raqui, and S. Ranwez, “A benchmarking on cloud based speech-to-text services for French speech and background noise effect,” arXiv.org, 07-May-2021. [Online]. Available at:
                        <a className='underline mx-1' href='https://arxiv.org/abs/2105.03409' target={'_blank'} rel='noreferrer'>https://arxiv.org/abs/2105.03409. </a>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Testing