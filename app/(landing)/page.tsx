import Link from 'next/link';
import Connect from '@/components/Connect';
import UsesList from '@/components/UsesList';
import TechList from '@/components/TechList';
import Timeline from '@/components/Timeline';
import ProjectsList from '@/components/ProjectsList';
import { projects } from '@/lib/projects';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Home() {
    let latestProjects = [];
    for (let i = 0; i < 3; i++) {
        latestProjects.push(projects[i]);
    }

    return (
        <div className="flex flex-col items-center justify-center w-full h-full pt-20 md:pt-36">
            <div className="justify-center items-center md:w-1/2 md:items-start md:justify-start">
                <div>
                    <span className="text-center md:text-start text-3xl md:text-6xl font-semibold">
                        Hello there! 👋 <br />
                        I'm{' '}
                    </span>
                    <span className="inline-block relative">
                        <span className="absolute w-full h-4 bottom-0 -skew-x-12 bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-300% animate-gradient" />
                        <span className="relative w-full text-3xl md:text-6xl font-semibold">
                            Bilal Sheikh
                        </span>
                    </span>
                </div>
            </div>

            <div className="my-8 text-start w-full px-11 md:w-1/2 items-start justify-start">
                <p className="text-xl text-zinc-400">
                    Hi, my name is Bilal Sheikh. I'm a Full Stack Developer and
                    passionate about creating innovative web solutions. Welcome
                    to my portfolio!
                </p>
            </div>

            <Separator className="w-4/5 bg-zinc-500" />

            <section className="my-8 text-start w-4/5 items-start justify-start">
                <p className="text-2xl text-white font-bold tracking-wide pb-16">
                    My Timeline
                </p>

                <Timeline />
            </section>

            <Separator className="w-4/5 bg-zinc-500" />

            <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                <p className="items-center text-2xl text-white font-bold tracking-wide pb-8">
                    Projects
                </p>
                <ProjectsList projects={latestProjects} />
            </section>

            <Link href={'/projects'}>
                <Button
                    className="flex w-52 py-7 text-xl items-center justify-center bg-black rounded-full hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-700"
                    variant={'outline'}
                >
                    View All
                </Button>
            </Link>

            <Separator className="w-4/5 bg-zinc-500 mt-8" />

            <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                <p className="items-center text-2xl text-white font-bold tracking-wide pb-8">
                    Technologies I know
                </p>

                <TechList />
            </section>

            <Separator className="w-4/5 bg-zinc-500 mt-8" />

            <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                <p className="items-center text-2xl text-white font-bold tracking-wide pb-8">
                    Stuff I use
                </p>

                <UsesList />
            </section>

            <Separator className="w-4/5 bg-zinc-500 mt-8" />

            <section className="mt-8 mb-20 text-start w-4/5 items-start justify-start">
                <p className="items-center text-2xl text-white font-bold tracking-wide pb-8">
                    Thanks for scrolling!
                </p>

                <Connect />
            </section>
        </div>
    );
}
