import Portfolio from '@/public/Portfolio.png';
import SkillForge from '@/public/SkillForge.png';
import MusicPlayer from '@/public/MusicPlayer.png';
import BeyondBazaar from '@/public/BeyondBazaar.png';
import StudentAttendance from '@/public/StudentAttendance.png';
import { StaticImageData } from 'next/image';

export interface Projects {
    id: number;
    name: string;
    shortDescription: string;
    LongDescription: string;
    img: StaticImageData;
    projectLink: string;
    githubLink: string;
}

export const projects: Projects[] = [
    {
        id: 5,
        name: 'Beyond Bazaar - An E-commerce website',
        shortDescription:
            'A full stack e-commerce website based on Next JS 13.4 using App router which provides top notch server side rendering features. This project uses Prisma as ORM, PostgreSQL for database, Tailwind for styling and Shadcn UI for design templates',
        LongDescription: `
        This project was made using the Next JS 13 App Router and React Server Components (RSC). This project was hard to build because I was new to server-side rendering concepts and also to Next 13, but it was fun and really insightful. I used Clerk JS for OAuth authentication because I found it easier to setup than NextAuth, Prisma as an ORM, and PostgreSQL for the database. The beautiful UI is from the Shadcn UI library, which is really easy to work with. The payment is done using the RazorPay payment gateway. This project taught me how server-side rendering works, how OAuth works, what ORMs are, why we need strict type safety for both the frontend and backend, and also how to make a website responsive using Tailwind CSS.

        What can this project do?

            For users:
            - View all products, choose by category, or search for a product.
            - Sort the products based on price and date.
            - Add product to cart.
            - Customize your cart.
            - Purchase a single product or whole cart.
            - View transaction and order history.
            - Manage your personal account.
            
            For Sellers:
            - Add a new product.
            - Update your product's inventory and other details.
            - Delete a product.
            - Track and manage your sales, and take immediate action.

        Used :
        - TypeScript
        - React JS
        - Next JS
        - Prisma
        - PostgreSQL
        - Tailwind CSS
        - Shadcn UI
        - Razorpay
        - Zod
        `,
        img: BeyondBazaar,
        projectLink: 'https://beyond-bazaar.vercel.app/',
        githubLink: 'https://github.com/Bilal-Sheikh/BeyondBazaar',
    },
    {
        id: 4,
        name: 'SkillForge - A course selling website',
        shortDescription:
            'A full stack course selling website build using MERN stack and styled using Material UI.',
        LongDescription: `  
        This was my very first full-stack website made using the MERN stack. As it was my first website, I didn't know how to design the UI of a website or how to make it responsive, so it's not that great-looking in the UI part. My primary focus was on the backend of the project. I wanted to know how websites work, how requests and responses work in a website, how React interacts with the servers, and why MERN is popular. This project helped me understand a great deal about how websites are designed and how they work under the hood. I learned about how to code in JavaScript, how to use Node JS, how HTTP works in Express JS, how databases work, what are SQL and No SQL databases, and many other interesting things. This project kickstarted my web development journey. I also learned a lot about how to use React JS, how to use UI libraries like Material UI for styling, how to use MongoDB, and what CRUD operations are. I also added a Razorpay payment gateway for purchasing courses. Later, I learned about TypeScript and why we should use it, so I decided to convert this project from JavaScript to TypeScript. I was still new to TypeScript, so this project doesn't have good types.
        
        What can this project do?
        
            For users:
            - See all available courses or search for a course.
            - See the author of a particular course.
            - Purchase a course.
            - A library where you can access your purchases.
            
            For Admins:
            - Add a new course.
            - Decide whether to publish a course or not.
            - Update existing courses.
            - Delete a course.
        
        Used:
        - React JS
        - Express JS
        - Node JS
        - Mongo DB
        - JavaScript, TypeScript
        - Razorpay
        `,
        img: SkillForge,
        projectLink: 'https://skillforge-fe.netlify.app/',
        githubLink: 'https://github.com/Bilal-Sheikh/SkillForge',
    },
    {
        id: 3,
        name: 'Emotion based Music Player',
        shortDescription:
            "Built a Emotion based Music Player in Python which utilizes the Deepface library for real-time emotion detection from a user's facial expressions. It also uses Streamlit for a user-friendly interface and OpenCV for video capture.",
        LongDescription: `
        This project was kind of a side project that I did after my main final year project was almost complete. I was curious about what the other simple use cases for face recognition could be other than using it for student attendance. I thought of doing something with the emotions that were detected along with the face. I decided to make an emotion-based music player that would capture the emotions of the detected face and play a song based on that detected emotion. For example, for a happy face, a happy song, and for a sad face, a sad song. A very simple Python project. After a few searches, I found DeepFace, a lightweight face recognition and facial attribute analysis library for Python.

        What can this project do?

        - Play a song based on the emotion on YouTube.
        - Detect the face and show the detected emotion on screen.

        Libraries used:

        - Streamlit (for web browsers)
        - Deepface (for detecting emotions)
        `,
        img: MusicPlayer,
        projectLink: 'https://github.com/Bilal-Sheikh/Emotion-Music-Player',
        githubLink: 'https://github.com/Bilal-Sheikh/Emotion-Music-Player',
    },
    {
        id: 2,
        name: 'Student Attendance using Face Recognition',
        shortDescription:
            'Built a software to allow schools or colleges to take attendance of student by identifying their face. This project was built using Python and the GUI was built using Tkinter. Also added a email notification feature, where parents or guardians would be informed if their ward is absent.',
        LongDescription: `
        This was my final year project that I did in my B.E. I was learning Python at the time, so I thought of doing something related to Python. For a few weeks, I searched for project ideas, and then later, I found that my college uses face recognition for the attendance of staff members. I thought of doing something similar, but for students. So I started watching YouTube videos, used Stack Overflow, read tons of articles, and also asked my project guide about how face recognition works and how I could use it in my project. After a few months, the project was ready, and my guide was very impressed with the work. Even some of the other teachers and professors were impressed. Later, I also added an email notification feature to notify parents or guardians about their ward's absence. This project is purely made using Python, from core operations to the GUI. The core functionality comes from the face_recognition library made by Adam Geitgey. This project helped me a lot to understand the basic as well as advanced concepts of Python, programming in general, and also a little bit of face recognition.

        What can this project do?

        - Take the attendance of multiple students simultaneously.
        - Save the attendance data in an Excel sheet.
        - Separate attendance sheet for each lecture taken in a day, not just one sheet for one day.
        - Email notification to notify parents about their ward's absence.
        - Add new student details like their name, email, and passport-size photo.

        Here are some of the main libraries this project uses:

        - Open CV (for webcam)
        - Tkinter (for GUI)
        - SMTP (for email)
        - face_recognition
        `,

        img: StudentAttendance,
        projectLink: 'https://github.com/Bilal-Sheikh/Student-Face-Attendance',
        githubLink: 'https://github.com/Bilal-Sheikh/Student-Face-Attendance',
    },
    {
        id: 1,
        name: 'Portfolio',
        shortDescription: 'This Website.',
        LongDescription:
            'This is my personal portfolio, created using NextJS 13 App Router, Shadcn UI, and Tailwind. I regularly update it with the new technologies that I learn and projects that I make.',
        img: Portfolio,
        projectLink: '',
        githubLink: 'https://github.com/Bilal-Sheikh/Portfolio',
    },
];
