import Portfolio from '@/public/Portfolio.png';
import SkillForge from '@/public/SkillForge.png';
import MusicPlayer from '@/public/MusicPlayer.png';
import BeyondBazaar from '@/public/BeyondBazaar.png';
import StudentAttendance from '@/public/StudentAttendance.png';
import { StaticImageData } from 'next/image';

export interface Projects {
    id: number;
    name: string;
    description: string;
    img: StaticImageData;
    link: string;
}

export const projects: Projects[] = [
    {
        id: 5,
        name: 'Beyond Bazaar - An E-commerce website',
        description:
            'A full stack e-commerce website based on Next JS 13.4 using App router which provides top notch server side rendering features. This project uses Prisma as ORM, PostgreSQL for database, Tailwind for styling and Shadcn UI for design templates',
        img: BeyondBazaar,
        link: '',
    },
    {
        id: 4,
        name: 'SkillForge - A course selling website',
        description:
            'A full stack course selling website build using MERN stack and styled using Material UI.',
        img: SkillForge,
        link: '',
    },
    {
        id: 3,
        name: 'Emotion based Music Player',
        description:
            "Built a Emotion based Music Player in Python which utilizes the Deepface library for real-time emotion detection from a user's facial expressions. It also uses Streamlit for a user-friendly interface and OpenCV for video capture.",
        img: MusicPlayer,
        link: '',
    },
    {
        id: 2,
        name: 'Student Attendance using Face Recognition',
        description:
            'Built a software to allow schools or colleges to take attendance of student by identifying their face. This project was built using Python and the GUI was built using Tkinter. Also added a email notification feature, where parents or guardians would be informed if their ward is absent.',
        img: StudentAttendance,
        link: '',
    },
    {
        id: 1,
        name: 'Portfolio',
        description: 'This Website.',
        img: Portfolio,
        link: '',
    },
];
