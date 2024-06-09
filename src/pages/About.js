import '../assets/css/About.css';
import Typewriter from 'typewriter-effect';
import clipgen from '../utils/clipgen';

export default function About() {
    return (
        <div className="bg-black flex flex-col h-screen overflow-hidden relative">
            <div className="absolute bgimg h-screen w-screen"/>
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                clipgen(),
                        }}
                    />
                </div>
                <div className="mx-auto max-w-screen-xl py-32 sm:py-48 lg:py-56">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-6xl">
                        <Typewriter
                            options={{
                                strings: ['Hello World!'],
                                cursor: '_',
                                deleteSpeed: 9999999999999,
                                autoStart: true,
                                loop: false,
                            }}
                        />
                        </h1>
                        <br />
                        <div
                            className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white text-center">
                            <span>My name is Hok, I am a</span>
                            <span
                                className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                <ul className="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                                    <li>&nbsp;Developer<span
                                        className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white">.</span></li>
                                    <li><span
                                        className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white">n</span> I.T. Professional<span
                                            className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white">.</span></li>
                                    <li>&nbsp;Nerd<span
                                        className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white">.</span></li>
                                    <li aria-hidden="true">&nbsp;Developer<span
                                        className="font-bold text-3xl md:text-4xl [text-wrap:balance] bg-clip-text text-white">.</span></li>
                                </ul>
                            </span>
                        </div>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="#"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                clipgen(),
                        }}
                    />
                </div>
            </div>
        </div>
    )
}