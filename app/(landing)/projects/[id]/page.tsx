import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { projects } from '@/lib/projects';
import Link from 'next/link';
import React from 'react';

export default function Project({ params }: { params: { id: string } }) {
    const project = projects.find(
        (project) => project.id === Number(params.id)
    );
    if (!project) {
        return null;
    }
    // console.log(project)

    return (
        <div>
            <div className="absolute w-full h-80 top-0 bg-slate-100">
                <h1 className="flex text-black items-center justify-center px-5 mt-36 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {project.name}
                </h1>
                <div className="flex items-center justify-center mt-12 gap-11">
                    <Link href={project.projectLink} target="_blank">
                        <Button variant={'ghost'} className="text-black">
                            Project {'->'}
                        </Button>
                    </Link>
                    <Link href={project.githubLink} target="_blank">
                        <Button variant={'ghost'} className="text-black">
                            Github {'->'}
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex flex-col items-center justify-center w-full h-full mt-72 pb-10">
                <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                    <h2 className="scroll-m-20 border-b-4 pb-2 text-2xl md:text-3xl font-semibold tracking-tight transition-colors">
                        About the project
                    </h2>
                    <p className="text-lg whitespace-pre-line font-light tracking-wide leading-loose min-h-screen">
                        {project.LongDescription}
                    </p>
                </section>
            </div>
        </div>
    );
}
