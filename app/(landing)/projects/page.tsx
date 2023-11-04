import React from 'react';
import ProjectsList from '@/components/ProjectsList';
import { projects } from '@/lib/projects';
import { Separator } from '@/components/ui/separator';

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                <p className="items-center text-2xl text-white font-bold tracking-wide pb-6">
                    Projects
                </p>

                <Separator className="w-full bg-zinc-500 mb-6" />

                <ProjectsList projects={projects} />
            </section>
        </div>
    );
}
