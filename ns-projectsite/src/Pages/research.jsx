const Research = () => {
    return (
        <>
            <div className="flex flex-col w-full justify-center items-center overflow-y-hidden overflow-x-hidden gap-y-8 text-gray-300 text-md md:text-lg break-words font-semibold ">
                <h1 className=" w-full text-3xl md:text-5xl opacity-75 font-bold leading-tight text-center transform transition hover:scale-105 duration-300 ease-in-out ">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r mx-2 from-green-400 via-pink-500 to-purple-500 uppercase font-bold">Research</span>
                </h1>
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title  bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Overview
                    </h1>


                    <p className="text-left collapse-content">
                        One of the main aims of our project is to develop a Progressive Web Application so that functionality is maintained while offline,
                        and data can be stored locally for use in this case. Furthermore, we aim to create a responsive application that can be deployed as a
                        mobile application or used in a desktop environment with the same functionality. We looked to a small range of popular front-end
                        frameworks to choose which we would settle for, these were namely: <span className='code-pink'>ReactJS</span>, <span className='code-pink'>Angular</span> and <span className='code-pink'>VueJS</span>. All of these frameworks are based on
                        <span className='code-pink'>JavaScript</span>, which we as a team are all familiar with and have previous experience with.
                    </p>

                </div>
                <div className="divider" />

                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Languages
                    </h1>
                    <div className="collapse-content">
                        <p className="my-3">
                            <span className='code-pink'>AngularJS[8]</span> is a framework based on <span className='code-pink'>TypeScript[9]</span>, which is a strongly typed extension to <span className='code-pink'>JavaScript</span>. It comes as an all-in-one Model-View-Controller framework, which may be more than we need for our application, but provides the most in one single package.
                        </p>
                        <p className="my-3">
                            <span className='code-pink'>ReactJS[6]</span> is a <span className='code-pink'>JavaScript</span> library that is based on <span className='code-pink'>JSX</span> – a syntax extension of <span className='code-pink'>JavaScript</span> - which is hybrid of HTML and JS, allowing for the dynamic rendering and creation of pages and components.<span className='code-pink'>React</span>uses reusable components that can be used across applications. The library itself is UI based, and so relies on third party packages for additional client-side functionality.
                        </p>
                        <p className="my-3">
                            <span className='code-pink'>VueJS[7]</span> is a <span className='code-pink'>JavaScript</span> framework that uses HTML templates and reusable components much like React. It is also UI focused but provides extended functionality such as routing through first-party integrations. It is marketed as a lightweight and easily scalable framework.
                        </p>
                        <div className="divider" />
                        <h3 className="font-bold text-2xl underline underline-offset-2 text-primary">
                            References
                        </h3>
                        <ul>
                            <li>[6] “React – A JavaScript library for building user interfaces,” Reactjs.org, 2019. <a className='underline' href='https://reactjs.org'>https://reactjs.org</a>. </li>
                            <li>[7] “Vue.js,” vuejs.org. <a className='underline' href='https://vuejs.org'>https://vuejs.org</a></li>
                            <li>[8] “Angular,” angular.io. <a className='underline' href='https://angular.io/guide/what-is-angular'>https://angular.io/guide/what-is-angular</a>. </li>
                            <li>[9] “TypeScript - JavaScript that scales.,” <a className='underline' href='www.typescriptlang.org'>https://www.typescriptlang.org</a>.</li>
                        </ul>
                    </div>
                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Performance comparisons
                    </h1>

                    <div className="collapse-content">
                        <p className='my-2'>
                            There are mild performance differences between these frameworks. In terms of raw start up time statistics and memory allocation, <span className='code-pink'>Vue</span> is most often the most performant[0] due to its lightweight structure[1]. <span className='code-pink'>React</span> and <span className='code-pink'>Angular</span> are the faster options when it comes to dynamic content rendering, especially partial content updates – an aspect that we are particularly interested in as the application will display a range of data for the user that will be updated frequently.
                        </p>

                        <div class="flex mx-auto flex-col w-10/12 lg:flex-row gap-x-3">
                            <div class="grid flex-grow card h-3/6 rounded-box place-items-center"><figure><img src={require('../App/pics/research/performance1.png')} alt="old-app" /></figure></div>
                            <div class="grid flex-grow card rounded-box place-items-center"> <figure><img src={require('../App/pics/research/performance2.png')} alt="old-app" /></figure></div>
                        </div>


                        <div className="flex flex-col md:flex-row gap-y-3 gap-x-3 justify-center">
                            <p>We decided that the run time and memory cost benefits of <span className='code-pink'>Vue</span> were not of great importance to us as we are not creating a specifically performance based application, but rather one based on data and visualisation, featuring dynamic charts and tables.</p>
                        </div>
                        <div className="divider" />
                        <h3 className="font-bold text-2xl underline underline-offset-2 text-primary">
                            References
                        </h3>
                        <ul>
                            <li>[0] “Interactive Results,” stefankrause.net. <a className='underline' href='https://stefankrause.net/js-frameworks-benchmark8/table.html'>https://stefankrause.net/js-frameworks-benchmark8/table.html </a>. </li>
                            <li>[1] “API Reference | Vue.js,” vuejs.org <a className='underline' href='https://vuejs.org/api/'>https://vuejs.org/api/</a></li>
                        </ul>
                    </div>

                </div>
                <div className="divider" />
                <div tabIndex="0" className="collapse collapse-arrow container rounded-box">
                    <input type="checkbox" />
                    <h1 className="collapse-title bg-clip-text text-transparent bg-gradient-to-bl from-sky-400 via-teal-400 to-lime-600 text-center text-2xl md:text-4xl underline-offset-8 mb-8 underline decoration-pink-600">
                        &gt; Tooling
                    </h1>
                    <div className="collapse-content">
                        <p>
                            <span className='code-pink'>Vue</span> is the least mature package of the competition given its smaller backing, and as a result has a smaller online community and range of plug-ins and support. It features in 3504 company’s tech stacks, compared to 10616 companies that use <span className='code-pink'>React</span> and 789 that use the new <span className='code-pink'>Angular</span>[3]. <span className='code-pink'>React</span> has the largest range of plug-ins and third-party packages that give it the most versatile tooling. However, from our research, <span className='code-pink'>React</span> has the least comprehensive official documentation, whereas <span className='code-pink'>Vue</span> and <span className='code-pink'>Angular</span> have vast official resources with more examples and tutorials available. Despite <span className='code-pink'>React</span> being less well documented, we feel that its more complete tooling and range of third-party packages makes it a better choice for our project. This is further supported by the findings posted by stateofjs.com[4] where <span className='code-pink'>React</span> comes out on top when it comes to developer satisfaction and overall usage with 88% of developers being satisfied with what <span className='code-pink'>React</span> has to offer, compared to 42% for <span className='code-pink'>AngularJS</span> and 85% for<span className='code-pink'>Vue</span>.
                        </p>
                        <figure className='mx-auto mb-3 card w-8/12  shadow-xl'><img src={require('../App/pics/research/performance3.png')} alt="old-app" /></figure>
                        <p>
                            <span className='code-pink'>React</span>is also the most used JS framework worldwide, with npmtrends.com[5] reporting that<span className='code-pink'>React</span> has been installed five-fold more times than<span className='code-pink'>Vue</span> via<span className='code-pink'>npm</span>. All three options provide a CLI tool that allows for easy deployment, building and testing of applications in development environments as well as support for <span className='code-pink'>PWA</span>. An extra benefit of<span className='code-pink'>React</span>and<span className='code-pink'>Angular</span> are their support for<span className='code-pink'>TypeScript</span>, which provides better tooling and IDE integration.

                            In conclusion, we decided to use<span className='code-pink'>ReactJS</span> as our<span className='code-pink'>JavaScript</span> library of choice. We feel the most confident in its tooling, its performance is more than ample in comparison, and its large online community and range of third-party documentation, examples and packages lead us to believe that it will provide the best development experience for us, as well as suitable functionality for the client.
                        </p>
                        <div className="divider" />
                        <h3 className="font-bold text-2xl underline underline-offset-2 text-primary">
                            References
                        </h3>
                        <ul>
                            <li>[3] “Software and technology stacks used by top companies,” StackShare.<a className='underline' href='https://stackshare.io/'>https://stackshare.io/</a></li>
                            <li>[4] “State of JS 2020: Front-end Frameworks,” 2020.stateofjs.com. <a className='underline' href='https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/'>https://2020.stateofjs.com/en-US/technologies/front-end-frameworks/ </a>. </li>
                            <li>[5] “react vs vue | npm trends,” www.npmtrends.com. <a className='underline' href=' https://www.npmtrends.com/react-vs-vue'> https://www.npmtrends.com/react-vs-vue</a></li>
                        </ul>
                    </div>




                </div>







            </div>


        </>
    )
}

export default Research