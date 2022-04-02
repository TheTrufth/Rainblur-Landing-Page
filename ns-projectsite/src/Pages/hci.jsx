const HCI = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">HCI</span>
                </h1>
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Gathering Requirements
                    </h1>


                    <div className="collapse-content">
                        <p className='my-2'>
                        We decided to give a questionnaire to two potential users to gather feedback about the idea of a voice-based diary application. These users were both active NHS patients.
                        The questionnaires were completed anonymously and the feedback we received was then used to create our Personas. 
                        </p>
                        <div class="overflow-x-auto">
                            <table class="table w-full table-compact">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Question</th>
                                        <th>Pseudo User 1</th>
                                        <th>Pseudo User 2</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <td>How often do you take diaries?</td>
                                        <td>
                                            I try to take them every day, but it ends 
                                            up being on average 3-4 times a week.
                                        </td>
                                        <td>
                                            Never. I have tried in the past, but I find 
                                            the task of writing tedious and tiring on the eye.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>2</th>
                                        <td>How would you feel about taking voice diaries?</td>
                                        <td>
                                        I would be open to the idea. However, I worry 
                                        that I won’t be able to read them back.
                                        </td>
                                        <td>
                                        Sounds like a good idea. 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>3</th>
                                        <td>How would you feel about your diary entries being shared with NHS staff? </td>
                                        <td>
                                        I would not be comfortable with that.
                                        </td>
                                        <td>
                                        I wouldn’t mind. 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>4</th>
                                        <td>What device would you want to use for these diaries?</td>
                                        <td>
                                        My phone
                                        </td>
                                        <td>
                                        My laptop
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
                        &gt; Personas
                    </h1>

                    <div className="collapse-content">
                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='w-10/12' src={require('../App/pics/hci/persona1.png')} alt="persona1" /></figure>
                        </div>
                        <h1>Kate McGinley (Muscular Dystrophy Patient) Age: 30</h1>
                        <p className='my-2'>
                        Kate carries a few disabilities including Muscular Dystrophy and Dyslexia, but she takes pride in living independently. She uses NHS services frequently and would love to share her thoughts through a diary. However, it is difficult for her to write written diaries. Kate now NudgeShare to take voice diaries and shares them with the relevant NHS staff. The text on the app is scalable to a larger size so that she can read it easily. 
                        </p>

                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='w-10/12' src={require('../App/pics/hci/persona2.png')} alt="persona2" /></figure>
                        </div>
                        <h1>Kyle George Michael (Young Working Adult) Age: 23</h1>
                        <p className='my-2'>
                        Kyle graduated from university a year ago, and now works full time at a bank. He has high tech literacy, but a low attention span. Kyle used NHS services to seek help for his anxiety induced by his busy work life and relationship. The therapy sessions were helpful, but the doctor want Kyle to take and share diary entries to track his progress with mental health. Kyle found the task of taking a written diary everyday daunting. He doesn’t have much spare time. With Nudge Share, he can record quick diaries with his voice to track his feelings.
                        </p>
                    </div>

                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Prototypes
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>
                            Based on the personas and scenarios, we produced some sketches to put our ideas into a visual form. We created sketches for the mobile interface and a desktop interface. We gathered pseudo-user feedback and opinions on these sketches and made the necessary changes toward the prototype. Our primary goal here was to conceptualise an app that is compatible with mobile and desktop interfaces.  It was apparent that this was needed from the Personas that we made.
                        </p>
                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='w-10/12' src={require('../App/pics/hci/p1.jpg')} alt="persona1" /></figure>
                        </div>
                        
                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='w-10/12' src={require('../App/pics/hci/p2.jpg')} alt="persona1" /></figure>
                        </div>

                        <div class="mx-auto mb-3 card w-full shadow-xl">
                            <figure><img className='w-10/12' src={require('../App/pics/hci/p3.jpg')} alt="persona1" /></figure>
                        </div>
        
                    </div>

                </div>


            </div>


        </>
    )
}

export default HCI