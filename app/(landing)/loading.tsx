import { Loader, Loader2 } from 'lucide-react';
import React from 'react';

export default function Loading() {
    return (
        <div className="w-full h-screen flex justify-center pt-56">
            <Loader2 className="animate-spin" size={40} color="#3b82f6" />
        </div>
    );
}
