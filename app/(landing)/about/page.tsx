import React from 'react';
import Link from 'next/link';
import { File, Github, Linkedin, Twitter } from 'lucide-react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGoogledocs } from 'react-icons/si';

export default function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-full h-full pb-10">
                <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                    <div className="flex items-center justify-between 20 border-b-4 pb-2 text-3xl font-semibold tracking-tight transition-colors">
                        <div>About me</div>
                        <div className="flex items-center justify-center gap-2 md:gap-5 pr-0 md:pr-10">
                            <Link
                                href={process.env.RESUME || ''}
                                className="cursor-pointer"
                                target="_blank"
                            >
                                <SiGoogledocs />
                            </Link>
                            <Link
                                href={process.env.LINKEDIN || ''}
                                className="cursor-pointer"
                                target="_blank"
                            >
                                <AiFillLinkedin />
                            </Link>
                            <Link
                                href={process.env.GITHUB || ''}
                                className="cursor-pointer"
                                target="_blank"
                            >
                                <AiFillGithub />
                            </Link>
                            <Link
                                href={process.env.TWITTER || ''}
                                className="cursor-pointer"
                                target="_blank"
                            >
                                <FaXTwitter />
                            </Link>
                        </div>
                    </div>
                    <p className="text-lg whitespace-pre-line font-light tracking-wide leading-loose min-h-screen pt-7">
                        Hello, My name is{' '}
                        <strong className="font-bold border-b-2 border-white">
                            {' '}
                            Bilal Sheikh
                        </strong>
                        . I am a full-stack developer with expertise in the MERN
                        (MongoDB, Express, React, Node.js) stack and Next.js. I
                        am proficient in{' '}
                        <strong className="font-bold border-b-2 border-white">
                            {' '}
                            JavaScript, TypeScript, and Python
                        </strong>
                        . I can make full-stack, end-to-end websites from
                        scratch in{' '}
                        <strong className="font-bold border-b-2 border-white">
                            MERN Stack and Next JS
                        </strong>
                        . I know many web development technologies like React
                        and NextJS, ORMs like Mongo and Prisma, databases like
                        My SQL and PostgreSQL, and also devops tools like AWS
                        and Docker. I regularly try to learn new things and
                        apply them to my personal projects so that I can have a
                        better understanding of them. <br />
                        <br />I began my educational journey with a{' '}
                        <strong className="font-bold border-b-2 border-white">
                            Diploma in Computer Engineering{' '}
                        </strong>
                        at Manav School of Polytechnic in Akola. During this
                        program, I gained a solid foundation in computer
                        programming, working with languages like C, C++, Java,
                        JavaScript, and Python. Additionally, I explored the
                        intricacies of data structures and algorithms, learning
                        how to optimize code for blazingly fast performance.
                        Following my diploma, I pursued a{' '}
                        <strong className="font-bold border-b-2 border-white">
                            {' '}
                            Bachelor's degree in Computer Science and
                            Engineering{' '}
                        </strong>
                        at the College of Engineering and Technology in Akola.
                        This degree allowed me to delve deeper into computer
                        software and hardware, providing a comprehensive
                        understanding of how computers operate. I also had the
                        opportunity to explore emerging technologies such as
                        IoT, AI, Blockchain, and Web 3.0.
                        <br />
                        <br />
                        These educational experiences and hands-on undertakings
                        have equipped me with the knowledge and skills to excel
                        in the field of web development and extend my expertise
                        beyond its boundaries.
                    </p>
                </section>
            </div>
        </div>
    );
}
