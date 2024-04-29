import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bilal Sheikh',
    description: 'Hi, My name is Bilal Sheikh',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <main>{children}</main>
                </ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
