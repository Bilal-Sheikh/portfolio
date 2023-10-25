import React from 'react';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';

export default function Navbar() {
    return (
        <div className="sticky top-0 flex flex-col items-center justify-center w-full h-full pt-10">
            <Menubar className="gap-1 rounded-full">
                <MenubarMenu>
                    <Link href={'/'}>
                        <MenubarTrigger className="rounded-full cursor-pointer hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                            Home
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>

                <MenubarMenu>
                    <Link href={'/projects'}>
                        <MenubarTrigger className="rounded-full cursor-pointer hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                            Projects
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>

                <MenubarMenu>
                    <Link href={'/about'}>
                        <MenubarTrigger className="rounded-full cursor-pointer hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                            About
                        </MenubarTrigger>
                    </Link>
                </MenubarMenu>
            </Menubar>
        </div>
    );
}
