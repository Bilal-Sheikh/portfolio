import React from 'react';
import ProjectsList from '@/components/ProjectsList';
import { projects } from '@/lib/projects';
import { Separator } from '@/components/ui/separator';

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <section className="mt-8 mb-4 text-start w-4/5 items-start justify-start">
                <h2 className="scroll-m-20 border-b-4 pb-4 text-3xl font-semibold tracking-tight transition-colors">
                    Projects
                </h2>
                <div className="pt-5">
                    <ProjectsList projects={projects} />
                </div>
            </section>
        </div>
    );
}
