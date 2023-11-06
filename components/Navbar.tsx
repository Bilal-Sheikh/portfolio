import React from 'react';
import Link from 'next/link';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { Icons } from '@/lib/icons';

export default function Navbar() {
    return (
        <div className="sticky top-0 flex flex-col items-center justify-center pt-10 z-50">

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
