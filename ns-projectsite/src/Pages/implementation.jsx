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
                        &gt; Implementation Showcase
                    </h1>

                    <div className="collapse-content">
                        <ImgComparisonSlider>
                            <img alt='' className='w-1/3' slot='second' src={require('../App/pics/old-app/old-app-1.png')} />
                            <img alt='' className='w-1/2' slot='first' src={require('../App/pics/new-app/new-app-1.png')} />

                        </ImgComparisonSlider>
                    </div>


                </div>



            </div>


        </>
    )
}

export default Implementation