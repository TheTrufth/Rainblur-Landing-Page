const Appendix = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Appendix</span>
                </h1>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; User Manual - for app
                    </h1>

                    <div className="collapse-content">
                        <div tabindex="0" class="collapse collapse-arrow my-4">
                            <input type="checkbox" />
                            <div class="collapse-title text-lg font-bold bg-green-500 text-black ">
                                1. Log In
                            </div>
                            <div class="collapse-content">
                                <div className="flex my-5">
                                    <img className='w-1/3' alt="" src={require('../App/pics/xemo/login.jpeg')} />
                                    <ul className="steps steps-vertical">
                                        <li className="step step-primary">Enter your username. </li>
                                        <li className="step step-primary">Enter your password. </li>
                                        <li className="step step-primary">Click Login. </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div tabindex="0" class="collapse collapse-arrow my-4">
                            <input type="checkbox" />
                            <div class="collapse-title text-lg font-bold bg-green-500 text-black ">
                                2. Make a recording
                            </div>
                            <div class="collapse-content">
                                <div className="flex my-5">
                                    <ul className="steps steps-horizontal">
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/records1.jpeg')} /> Navigate to 'records' page.</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/records2.jpeg')} />Click the '+' button.</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/records3.jpeg')} />Select duration + type of recording.</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/records4.jpeg')} />Set optional scores, title and click Save.</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/records5.jpeg')} />Your recording is now visible</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div tabindex="0" class="collapse collapse-arrow my-4">
                            <input type="checkbox" />
                            <div class="collapse-title text-lg font-bold bg-green-500 text-black ">
                                3. Share recording
                            </div>
                            <div class="collapse-content">
                                <div className="flex my-5">
                                    <ul className="steps steps-horizontal">
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/share1.jpeg')} /> Navigate to 'Profile' page.</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/share2.jpeg')} />Accept the user consent share and click Save</li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/share3.jpeg')} />Goto 'Records' tab and now analysis icon will be spinning </li>
                                        <li className="step step-primary mx-2"><img className='w-full' alt="" src={require('../App/pics/xemo/share4.jpeg')} />It will turn green once completed.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div tabindex="0" class="collapse collapse-arrow my-4">
                            <input type="checkbox" />
                            <div class="collapse-title text-lg font-bold bg-green-500 text-black ">
                                4. View/Update Recording
                            </div>
                            <div class="collapse-content">
                                <div className="flex my-5">
                                    <img className='w-1/3' alt="" src={require('../App/pics/xemo/view.jpeg')} />
                                    <ul className="steps steps-vertical">
                                        <li className="step step-primary">Click the record. </li>
                                        <li className="step step-primary">You should now see the wordcloud/transcript and scores. </li>
                                        <li className="step step-primary">Optionally edit the scores and Click Save! </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div tabindex="0" class="collapse collapse-arrow my-4">
                            <input type="checkbox" />
                            <div class="collapse-title text-lg font-bold bg-green-500 text-black ">
                                5. View Analysis graphs
                            </div>
                            <div class="collapse-content">
                                <div className="flex my-5">
                                    <ul className="steps steps-horizontal">
                                        <li className="step step-primary mx-2"><img className='w-1/2' alt="" src={require('../App/pics/xemo/view-ana1.jpeg')} /> Navigate to 'Analysis' page. Here you will see a graph summarising number of records made as well as total duration</li>
                                        <li className="step step-primary mx-2"><img className='w-1/2' alt="" src={require('../App/pics/xemo/view-ana2.jpeg')} />Navigate to the 'Scores' tab to see a graph of your scores.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>




                    </div>


                </div>

                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Deployment Manual
                    </h1>

                    <div className="collapse-content">
                        <p><span className="code-pink">Gunicorn</span> and <span className="code-pink">Nginx</span> have already been set up on the given Linode server so those steps have been ommited.
                            The admin passwords and associated sample data will be given directly to the client and will not be shown here for privacy reasons.
                        </p>
                        <h2 className="text-2xl my-2">Build the React App</h2>
                        <div class="mockup-code">
                            <pre data-prefix="$"><code>scp -r ReactApp mobilevadmin@212.71.238.201:/home/mobilevadmin/ReactApp</code></pre>
                            <pre data-prefix="$"><code>ssh mobilevadmin@212.71.238.201</code></pre>
                            <pre data-prefix="$"><code>cd ~/ReactApp</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>npm ci</code></pre>
                            <pre data-prefix="$" class="text-success"><code>npm run build</code></pre>
                        </div>
                        <h2 className="text-2xl my-2">Build the Flask App</h2>
                        <div class="mockup-code">
                            <pre data-prefix="$"><code>scp -r FlaskApp mobilevadmin@212.71.238.201:/home/mobilevadmin/FlaskApp</code></pre>
                            <pre data-prefix="$"><code>ssh mobilevadmin@212.71.238.201</code></pre>
                            <pre data-prefix="$"><code>cd ~/FlaskApp</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>python3 -m venv venv</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>source venv/bin/activate</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>pip install --upgrade pip</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>pip install -r requirements.txt</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>python db_generate.py create prod</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>python db_generate.py seed prod</code></pre>
                            <pre data-prefix="$" class="text-warning"><code>deactivate</code></pre>
                            <pre data-prefix="$" class="text-success"><code>sudo systemctl restart mobilev</code></pre>
                        </div>


                    </div>


                </div>



            </div>


        </>
    )
}

export default Appendix