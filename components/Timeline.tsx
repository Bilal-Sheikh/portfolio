import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from '@/components/ui/hover-card';

export default function Timeline() {
    return (
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            {/* <!-- Stack 1 --> */}
            <div className="col-span-4 w-full h-full">
                <div className="w-full h-full p-2 md:ml-8">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button
                                variant="link"
                                className="w-full justify-end items-end text-white text-sm md:text-xl pr-0 font-bold py-2"
                            >
                                Aug, 2017 - Nov, 2020
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-start text-start">
                                <blockquote className="mt-2 pl-6 italic">
                                    During this period, I acquired a strong
                                    foundation in computer science, encompassing
                                    the fundamentals of computer operation,
                                    basic programming skills, insights into
                                    operating systems, data structure
                                    principles, algorithm design, and the basics
                                    of web development.
                                </blockquote>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                    <div className="text-gray-100 text-end text-xs md:text-sm">
                        <h1 className="font-semibold">
                            Diploma in Computer Science
                        </h1>
                        <h1 className="italic">
                            Manav School of Polytechnic Akola
                        </h1>
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

            <div className="col-span-4 w-full h-full md:pb-14">
                <div className="w-full h-full rounded-md p-2 md:-ml-8">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button
                                variant="link"
                                className="w-full justify-start items-start text-white text-sm md:text-xl pl-0 font-bold md:py-2"
                            >
                                Feb, 2021 - Aug, 2023
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-start text-start">
                                <blockquote className="mt-2 pl-6 italic">
                                    Throughout my degree program, I delved
                                    deeper into the intricacies of computer
                                    fundamentals and programming languages,
                                    gradually honing my skills. This journey led
                                    me to undertake simple projects in Python
                                    and venture into web development using
                                    technologies like React and Node.js. For my{' '}
                                    <Link
                                        href={'/projects/2'}
                                        className="text-blue-600 border-b-2 border-blue-600"
                                    >
                                        final-year project
                                    </Link>{' '}
                                    , I chose Python as my primary language due
                                    to its alignment with the project's specific
                                    requirements and my comfort with the
                                    language.
                                </blockquote>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                    <div className="text-gray-100 sm:text-sm text-xs">
                        <p className="font-semibold">
                            Bachelors in Computer Science and Engineering
                        </p>
                        <p className="italic">
                            College of Engineering and Technology Akola
                        </p>
                    </div>
                </div>
            </div>

            {/* <!-- Stack 3 --> */}
            <div className="col-span-4 w-full h-full">
                <div className="w-full h-full p-2 md:ml-8 text-end">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button
                                variant="link"
                                className="w-full justify-end items-end text-white text-sm md:text-xl pr-0 font-bold pt-16 md:pt-0 md:py-2"
                            >
                                Aug, 2023 - Sep, 2023
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-start text-start">
                                <blockquote className="mt-2 pl-6 italic">
                                    This was my very first full-stack project in
                                    MERN Stack, so the design may not have
                                    reached its full potential. My primary focus
                                    was on successfully constructing a complete
                                    full-stack website, with design
                                    considerations taking a back seat.
                                    Throughout this endeavor, I immersed myself
                                    in a multitude of new web development
                                    technologies, encompassing JavaScript,
                                    TypeScript, MongoDB, Node.js, Express.js,
                                    React.js, and various aspects including
                                    databases, authentication, and middlewares.
                                </blockquote>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

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
                <div className="absolute w-3 h-3 rounded-full bg-white z-10 text-white text-center mb-28 md:mb-20" />
            </div>

            <div className="col-span-4 w-full h-full pt-4 pb-14">
                <div className="w-full h-full rounded-md p-2 md:-ml-8">
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button
                                variant="link"
                                className="w-full justify-start items-start text-white text-sm md:text-xl pl-0 font-bold md:py-2"
                            >
                                Sep, 2023 - Oct, 2023
                            </Button>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-80">
                            <div className="flex justify-start text-start">
                                <blockquote className="mt-2 pl-6 italic">
                                    At this point, having gained a solid
                                    understanding of full-stack website
                                    development, I was eager to explore the
                                    workings of server-side rendering. To
                                    achieve this, I decided to go with the
                                    Next.js App Router framework for my project.
                                    Unlike my prior project, where the emphasis
                                    was primarily on the backend, I sought a
                                    more balanced approach, paying equal
                                    attention to both front-end and back-end
                                    development. So for the front-end, I
                                    leveraged the
                                    <Link
                                        href={'https://ui.shadcn.com/'}
                                        target="_blank"
                                        className="text-blue-600 border-b-2 border-blue-600"
                                    >
                                        Shadcn UI library
                                    </Link>{' '}
                                    , which offered a collection of
                                    user-friendly and aesthetically pleasing
                                    out-of-the-box UI components.
                                </blockquote>
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                    <div className="text-gray-100 sm:text-sm text-xs">
                        <p className="font-semibold">
                            First Next JS (SSR) Project
                        </p>
                        <p className="italic">
                            Beyond Bazaar - An E-commerce Website
                        </p>
                    </div>
                </div>
            </div>
            {/* END */}
        </div>
    );
}
