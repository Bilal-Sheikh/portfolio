import React from 'react';
import { tech } from '@/lib/tech';
import { Card, CardContent, CardHeader } from './ui/card';

export default function TechList() {
    return (
        <div className="grid grid-cols-6 gap-3">
            {tech.map((item) => (
                <Card className="flex flex-col items-center justify-center hover:shadow-lg hover:shadow-sky-400/70 transition-all duration-300">
                    <CardHeader>{item.icon}</CardHeader>
                    <CardContent className="text-lg">{item.name}</CardContent>
                </Card>
            ))}
        </div>
    );
}
