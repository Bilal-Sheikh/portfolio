import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGoogledocs } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ExternalLink } from 'lucide-react';

export default function Connect() {
    return (
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link
                href={process.env.RESUME || ''}
                className="cursor-pointer"
                target="_blank"
            >
                <Button
                    className="flex w-52 py-7 text-xl items-center justify-center gap-2 bg-zinc-800 rounded-full hover:bg-zinc-500 transition-all duration-300"
                    variant={'outline'}
                >
                    <SiGoogledocs /> Resume
                    <ExternalLink
                        className="ml-2 text-slate-400"
                        strokeWidth={1.5}
                        size={15}
                    />
                </Button>
            </Link>

            <Link
                href={process.env.LINKEDIN || ''}
                className="cursor-pointer"
                target="_blank"
            >
                <Button
                    className="flex w-52 py-7 text-xl items-center justify-center gap-2 bg-zinc-800 rounded-full hover:bg-zinc-500 transition-all duration-300"
                    variant={'outline'}
                >
                    <AiFillLinkedin /> LinkedIn
                    <ExternalLink
                        className="ml-2 text-slate-400"
                        strokeWidth={1.5}
                        size={15}
                    />
                </Button>
            </Link>

            <Link
                href={process.env.GITHUB || ''}
                className="cursor-pointer"
                target="_blank"
            >
                <Button
                    className="flex w-52 py-7 text-xl items-center justify-center gap-2 bg-zinc-800 rounded-full hover:bg-zinc-500 transition-all duration-300"
                    variant={'outline'}
                >
                    <AiFillGithub /> Github
                    <ExternalLink
                        className="ml-2 text-slate-400"
                        strokeWidth={1.5}
                        size={15}
                    />
                </Button>
            </Link>

            <Link
                href={process.env.TWITTER || ''}
                className="cursor-pointer"
                target="_blank"
            >
                <Button
                    className="flex w-52 py-7 text-xl items-center justify-center gap-2 bg-zinc-800 rounded-full hover:bg-zinc-500 transition-all duration-300"
                    variant={'outline'}
                >
                    <FaXTwitter /> Twitter
                    <ExternalLink
                        className="ml-2 text-slate-400"
                        strokeWidth={1.5}
                        size={15}
                    />
                </Button>
            </Link>
        </div>
    );
}
