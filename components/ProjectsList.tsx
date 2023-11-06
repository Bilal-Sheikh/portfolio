'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Projects } from '@/lib/projects';
import { useRouter } from 'next/navigation';
import { ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProjectsList({ projects }: { projects: Projects[] }) {
    const router = useRouter();

    return (
        <div>
            {projects.map((project) => (
                <div className="py-4" key={project.id}>
                    <Card
                        className="group md:flex hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 cursor-pointer"
                        key={project.id}
                        onClick={() => router.push(`/projects/${project.id}`)}
                    >
                        <div className="md:shrink-0">
                            <Image
                                src={project.img}
                                alt={project.name}
                                objectFit="contain"
                                className="h-48 w-full md:h-full md:w-96"
                                placeholder="blur"
                            />
                        </div>
                        <div>
                            <CardHeader>
                                <CardTitle className="flex items-center text-xl font-bold">
                                    {project.name}
                                    <Link
                                        href={project.projectLink}
                                        target="_blank"
                                    ></Link>
                                    <ExternalLink
                                        className="ml-2 text-slate-400"
                                        strokeWidth={1.5}
                                        size={17}
                                    />
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="text-zinc-400 group-hover:text-zinc-800">
                                <p>{project.shortDescription}</p>
                            </CardContent>
                        </div>
                    </Card>
                </div>
            ))}
        </div>
    );
}
