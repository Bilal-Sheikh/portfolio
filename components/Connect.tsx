import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { SiGoogledocs } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { ExternalLink } from 'lucide-react';

export default function Connect() {
    return (
        <div className="flex items-center justify-start gap-4">
            <Link
                href={
                    'https://drive.google.com/file/d/1lnWreLfw8yRFUGREsPqP6KgJl4-T7fUY/view?usp=sharing'
                }
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
                href={'https://www.linkedin.com/in/bilalsheikh-bs/'}
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
                href={'https://github.com/Bilal-Sheikh'}
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
                href={'https://twitter.com/72bilal_sheikh'}
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
