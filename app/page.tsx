import Image from 'next/image';
import Particles from '@/components/Particles';
import Link from 'next/link';

const navigation = [
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
];

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            {/* <Particles
                className="absolute inset-0 -z-10 animate-fade-in"
                quantity={200}
            /> */}
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
            <div>
                <h1 className="z-10 text-2xl text-transparent duration-1000 bg-white cursor-default animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
                    Bilal Sheikh
                </h1>
                <div className="my-16 text-center animate-fade-in">
                    <h2 className="text-sm text-zinc-500 mx-6">
                        Hi, my name is Bilal Sheikh, I'm building serverless and
                        open source solutions at{' '}
                        <Link
                            target="_blank"
                            href="https://upstash.com"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            Upstash
                        </Link>
                        <wbr /> and working on{' '}
                        <Link
                            target="_blank"
                            href="https://unkey.dev"
                            className="underline duration-500 hover:text-zinc-300"
                        >
                            unkey.dev
                        </Link>{' '}
                        at night.
                    </h2>
                </div>
            </div>
        </div>
    );
}
