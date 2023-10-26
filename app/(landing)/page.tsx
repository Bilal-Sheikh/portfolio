import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center ml-16 w-full h-full pt-36">
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

            <div className="my-8 text-start w-1/2 items-start justify-start">
                <p className="text-xl text-white font-semibold">My Timeline</p>
            </div>
        </div>
    );
}
