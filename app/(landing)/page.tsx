import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-36">
            <div className="w-1/2 items-start justify-start">
                <div className="text-2xl text-start sm:text-6xl md:text-6xl font-semibold">
                    Hello there! 👋 <br />
                    I'm{' '}
                    <span className="inline-block relative">
                        <span className="absolute w-full h-4 bottom-0 -skew-x-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-300% animate-gradient" />
                        <span className="relative text-6xl">Bilal Sheikh</span>
                    </span>
                </div>
            </div>

            <div className="my-8 text-start w-1/2 items-start justify-start">
                <p className="text-xl text-zinc-400">
                    Hi, my name is Bilal Sheikh. I'm a Full Stack Developer,
                    passionate about creating innovative web solutions. Welcome
                    to my portfolio!
                </p>
            </div>

            <Separator className="w-1/2 bg-zinc-500" />

            <section className="my-8 text-start w-1/2 items-start justify-start">
                <p className="text-2xl text-white font-bold tracking-wide pb-16">
                    My Timeline
                </p>

                <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
                    {/* <!-- Stack 1 --> */}
                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full p-2 md:pl-4 text-end">
                            <h1 className="text-white text-xl font-bold py-2">
                                2017 - 2020
                            </h1>
                            <div className="text-gray-100 sm:text-sm text-xs">
                                <p className="font-semibold">
                                    Diploma in Computer Science
                                </p>
                                <p className="italic">
                                    Manav School of Polytechnic Akola
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-px bg-white mt-10" />
                        <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center mb-16" />
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    {/* <!-- Stack 2 --> */}
                    <div className="col-span-4 w-full h-full" />
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-px bg-white" />
                        <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center mb-24" />
                    </div>

                    <div className="col-span-4 w-full h-full pt-10 pb-14">
                        <div className="w-full h-full rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-xl font-bold py-2">
                                2021 - 2023
                            </h1>
                            <div className="text-gray-100 sm:text-sm text-xs">
                                <p className="font-semibold">
                                    Bachelors in Computer Science and
                                    Engineering
                                </p>
                                <p className="italic">
                                    College of Engineering and Technology Akola
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Stack 3 --> */}
                    <div className="col-span-4 w-full h-full">
                        <div className="w-full h-full p-2 md:pl-4 text-end">
                            <h1 className="text-white text-xl font-bold py-2">
                                Aug, 23 - Sep, 23
                            </h1>
                            <div className="text-gray-100 sm:text-sm text-xs">
                                <p className="font-semibold">
                                    First MERN Stack Project
                                </p>
                                <p className="italic">
                                    SkillForge - A course selling website
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-px bg-white" />
                        <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center mb-12" />
                    </div>
                    <div className="col-span-4 w-full h-full"></div>

                    {/* <!-- Stack 4 --> */}
                    <div className="col-span-4 w-full h-full" />
                    <div className="relative col-span-1 w-full h-full flex justify-center items-center">
                        <div className="h-full w-px bg-white" />
                        <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center mb-20" />
                    </div>

                    <div className="col-span-4 w-full h-full pt-8 pb-14">
                        <div className="w-full h-full rounded-md p-2 md:pl-4">
                            <h1 className="text-white text-xl font-bold py-2">
                                Sep, 23 - Oct, 23
                            </h1>
                            <div className="text-gray-100 sm:text-sm text-xs">
                                <p className="font-semibold">
                                    First SSR Project
                                </p>
                                <p className="italic">
                                    Beyond Bazaar - An E-commerce Website
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* END */}
                </div>
            </section>

            <Separator className="w-1/2 bg-zinc-500" />

            <section className="my-8 text-start w-1/2 items-start justify-start">
                <p className="text-2xl text-white font-bold tracking-wide pb-16">
                    Projects
                </p>
                

            </section>
        </div>
    );
}
